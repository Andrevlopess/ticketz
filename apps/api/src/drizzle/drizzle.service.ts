import { Injectable } from "@nestjs/common";

@Injectable()
export class DrizzleService {
  getRoot(): string {
    return "This is the root of the ticketz api!";
  }
}