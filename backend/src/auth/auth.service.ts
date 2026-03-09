import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(idToken: string): Promise<{ access_token: string; user: UserDocument }> {
    // In production, verify the Web3Auth idToken against the JWKS endpoint
    // For now, decode and extract user info for development
    let userInfo: { email: string; name: string; walletAddress: string };

    try {
      // Development mode: accept demo token
      if (idToken === 'demo_token') {
        userInfo = {
          email: 'demo@urweb.io',
          name: 'Demo User',
          walletAddress: '7xKXp2R8mVbQz3nYwJk4LhGf5tUcEa9mPq',
        };
      } else {
        // In production, verify JWT from Web3Auth
        // const decoded = await this.verifyWeb3AuthToken(idToken);
        // For now, parse basic info
        userInfo = {
          email: `user_${Date.now()}@urweb.io`,
          name: 'UrWeb User',
          walletAddress: `wallet_${Date.now()}`,
        };
      }
    } catch {
      throw new UnauthorizedException('Invalid authentication token');
    }

    // Find or create user
    let user = await this.usersService.findByEmail(userInfo.email);
    if (!user) {
      user = await this.usersService.create({
        email: userInfo.email,
        name: userInfo.name,
        walletAddress: userInfo.walletAddress,
      });
    }

    // Generate JWT
    const payload = { sub: user._id, email: user.email, wallet: user.walletAddress };
    const access_token = this.jwtService.sign(payload);

    return { access_token, user };
  }

  async validateUser(userId: string): Promise<UserDocument> {
    return this.usersService.findById(userId);
  }
}
