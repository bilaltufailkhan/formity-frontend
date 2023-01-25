import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";

const Basic = async (data) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: data.fields.full_name,
                bold: true,
                font: "Poppins",
                color: "#e63946",
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
          new Table({
            columnWidths: [3505, 5505],
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Full Name",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.full_name,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              //next table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Email",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.email,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "NDIS Coordinator",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.ndis_support_cooridinator,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Guardian Name",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.guardian_name,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Guardian Phone",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.guardian_phone,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Date of Assessment",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.date_of_assesment,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Phone Number",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.phone_number,
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "NDIS Number",
                            bold: true,
                            font: "Poppins",
                            color: "#e63946",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.ndis_number.toString(),
                            font: "Poppins",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // new table row here
            ],
          }),
        ],
      },
    ],
  });
  // Save the document
  // const fileName = Math.random().toString(36).substring(2, 15) + ".docx"; // Random File Name Generation
  return Packer.toBlob(doc).then((blob) => {
    saveAs(blob, Math.random().toString(36).substring(2, 15) + ".docx");
  });
};

export default Basic;
