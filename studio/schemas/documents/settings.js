import React from "react";

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page title',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
}
