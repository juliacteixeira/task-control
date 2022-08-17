import { model, Schema } from "mongoose";
import { ITarefa } from "../../types/task-control/index.types";

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  { collection: "tasks" }
);

export default model<ITarefa>("Todo", todoSchema);
