import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import type { OrganizationInsert } from '@ticketz/database';
import type { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { getUserPermissions } from 'src/utils/get-user-permissions';
import { Actions } from '@ticketz/auth';

@Controller('organizations')
// @Roles(['admin'])
// @UseGuards(RolesGuard)
export class OrganizationsController {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private authService: AuthService,
  ) {}

  @Post()
  create(@Body() createOrganizationDto: OrganizationInsert) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.organizationsService.findMany(req.user.sub);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    const userId = await req.getCurrentUserId();

    const { membership, organization } = await req.getUserMembership(+id);

    const { can, rules } = getUserPermissions(userId, membership.role);

    return {
      rules,
      role: membership.role,
      // pode: can(Actions.Delete, 'all'),
    };

    // console.log(req);

    // if (!req.user?.org) {
    //   throw new UnauthorizedException();
    // }

    // return this.organizationsService.findOne(req.user.org);

    return this.organizationsService.findOne(+id, req.user.sub);
  }

  // @Patch(':id')
  // async update(
  //   @Req() { user }: Request,
  //   @Param('id') id: string,
  //   @Body() updateOrganizationDto: any,
  // ) {
  //   const isMember = await this.authService.validateMembership(user.sub, +id);
  //   if (!isMember) throw new NotFoundException();

  //   return this.organizationsService.update(+id, updateOrganizationDto);
  // }

  // @Delete(':id')
  // remove(@Req() { user }: Request, @Param('id') id: string) {
  //   const isMember = this.authService.validateMembership(user.sub, +id);
  //   if (!isMember) throw new NotFoundException();

  //   return this.organizationsService.remove(+id);
  // }
}
