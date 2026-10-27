import { Body, Controller, Get, HttpCode, Inject, Post, Query, UseGuards } from '@nestjs/common';
import { CurrentTenantId } from '../../../common/decorators/current-tenant.decorator';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../../../common/decorators/current-user.decorator';
import { Roles } from '../../../common/decorators/roles.decorator';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { ZodValidationPipe } from '../../../common/pipes/zod-validation.pipe';
import { userInviteSchema, userRoleSchema, type UserInvite } from '@kidscare/shared-schemas';
import type { UserResponseDto } from '../dto/user-response.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@UseGuards(TenantGuard)
export class UsersController {
  constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

  @Get()
  @Roles('SUPER_ADMIN', 'ADMIN', 'TEACHER', 'PARENT')
  async list(
    @CurrentTenantId() tenantId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Query('role') roleQuery?: string,
  ): Promise<UserResponseDto[]> {
    const role = roleQuery ? userRoleSchema.parse(roleQuery) : undefined;
    return this.usersService.list(tenantId, role, user);
  }

  @Post()
  @Roles('SUPER_ADMIN', 'ADMIN')
  @HttpCode(201)
  async invite(
    @CurrentTenantId() tenantId: string,
    @Body(new ZodValidationPipe(userInviteSchema)) body: UserInvite,
  ): Promise<UserResponseDto> {
    return this.usersService.invite(tenantId, body);
  }
}
