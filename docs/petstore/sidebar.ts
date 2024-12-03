import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/pet-store-api",
    },
    {
      type: "category",
      label: "Pets",
      items: [
        {
          type: "doc",
          id: "petstore/list-all-pets",
          label: "List all pets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/create-a-new-pet",
          label: "Create a new pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/get-a-specific-pet",
          label: "Get a specific pet",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
