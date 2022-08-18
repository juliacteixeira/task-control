import { Document } from "mongoose"

export interface ITarefa extends Document {
  name: string
  description: string
  status: boolean
  deadline: Date
}