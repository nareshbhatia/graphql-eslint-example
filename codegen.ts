import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["./*.ts"],
  generates: {
    "./generated/": {
      preset: "client",
    },
  },
};

export default config;
