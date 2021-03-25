// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md"

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .schemaType('settings')
            .documentId('settings')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['settings'].includes(listItem.getId()))
    ])
