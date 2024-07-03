import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("")
  getHello(): string {
    return "TESTE1234";
  }

  @Get("/teste")
  getHello2(): string {
    return process.env.BD_URL;
  }
}
