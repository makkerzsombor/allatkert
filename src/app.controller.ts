import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { Allat } from './Allat.dto';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {};
  }

  @Post()
  @Render('kesz')
  allat(@Body() allat: Allat): object{
    
    return allat;
  }
}