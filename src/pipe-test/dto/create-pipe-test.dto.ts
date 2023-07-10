import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePipeTestDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 10, {
    message: '5-10个字符',
  })
  name: string;

  @IsNotEmpty()
  age: number;
}
