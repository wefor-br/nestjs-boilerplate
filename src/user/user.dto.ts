import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDTO {
    @ApiModelPropertyOptional()
    email?: string;
    @ApiModelPropertyOptional()
    firstName?: string;
    @ApiModelPropertyOptional()
    lastName?: string;
    @ApiModelPropertyOptional()
    gender?: string;
    @ApiModelPropertyOptional()
    password?: string;
    @ApiModelPropertyOptional()
    oldPassword?: string;
}