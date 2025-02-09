import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisteredUserDto } from './create-registered-user.dto';

export class UpdateRegisteredUserDto extends PartialType(CreateRegisteredUserDto) {}
