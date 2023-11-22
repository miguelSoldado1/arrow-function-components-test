"use client";

import React from "react";
import { ClientComponent2 } from ".";

export const ClientComponent1 = () => {
  return (
    <div className="border p-8 m-4">
      Client Component 1
      <ClientComponent2 />
    </div>
  );
};
