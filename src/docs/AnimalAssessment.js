import {
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  HeadingLevel,
  ImageRun,
  Packer,
  PageBreak,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
// import logo from "assets/img/ndis.jpg";

export const AnimalAssessment = async (data) => {
  const logo = await import("assets/img/ndis.jpg");
  const doc = new Document({
    creator: "Accrual Hub",
    title: "AAA Template",
    description: "A brief example of using docx",
    styles: {
      default: {
        heading1: {
          run: {
            size: 44,
            bold: true,
            color: "000000",
          },
          paragraph: {
            spacing: {
              before: 120,
            },
          },
        },
        heading2: {
          run: {
            size: 30,
            bold: true,
            color: "6B2976",
          },
          paragraph: {
            spacing: {
              before: 240,
              after: 120,
            },
          },
        },
      },
      //   paragraphStyles: [
      //     {
      //       run: {
      //         size: 100,
      //       },
      //       paragraph: {
      //         indent: {
      //           left: convertInchesToTwip(0.5),
      //         },
      //         spacing: {
      //           line: 276,
      //         },
      //       },
      //     },
      //   ],
    },
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [
                  new ImageRun({
                    url: logo,
                    transformation: {
                      width: 100,
                      height: 100,
                    },
                  }),
                  new TextRun({
                    text: "Assistance Animal Assessment Template",
                    font: "Arial",
                    break: 1,
                  }),
                ],
                border: {
                  bottom: {
                    color: "auto",
                    space: 1,
                    style: "single",
                    size: 6,
                  },
                },
              }),
            ],
          }),
        },
        //content part start
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "Notes for Assistive Technology (AT) Assessors of Assistance Animal Supports",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "There are specific templates available for the following types of AT:",
                color: "000000",
                bold: true,
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "General Assistive Technology Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Continence Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Prosthetics and Orthotics Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Vehicle Modifications Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Complex Home Modification Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Dog Guide Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Assistance Animal Assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "The assessment information provided in this form will be used by the NDIA to understand how the specified AT will assist the participant to pursue their goals and to assess whether it is reasonable and necessary for the NDIS to fund AT support.",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Using this template is not mandatory. If a provider elects to provide information in another format, they must include all information described in this template. Information provided needs to include an outline of the functional impact of each feature being recommended. This should include how the AT will support capacity building, promote independence and impact alternative forms of support.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "The primary criteria NDIS delegates use when determining if a piece of equipment or modification is suitable for the NDIS to fund is section 34: reasonable and necessary supports of the ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "National Disability Insurance Scheme Act 2013 (NDIS Act; external) and section 34",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: ".",
                color: "000000",
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Additional information on how the recommendation(s) will be considered in the context of specific supports can be found in the ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "NDIS Operational Guidelines",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: " available online and the ",
                color: "000000",
                font: "Arial",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "NDIS (Supports for Participants) Rules 2013",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: ".",
                color: "000000",
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "AT Strategy: ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Supports will be provided in line with the NDIA’s AT Strategy that can be found at ",
                font: "Arial",
                color: "000000",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "Assistive Technology Strategy",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: " and as outlined in ",
                color: "000000",
                font: "Arial",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "NDIS AT Complexity",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: " document.",
                color: "000000",
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Assistive Technology (AT) Assessor: ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "An AT assessor is able to assess a participant's needs and situation and identify the most appropriate AT, they may be an allied health practitioner, psychologist, or specialist.",
                font: "Arial",
                color: "000000",
              }),
              new TextRun({
                text: "AT Assessors have obligations under the NDIS Provider Terms of Business, Quality and Safeguards Commission and their respective professional registration under Australian Health Practitioner Regulation Agency (AHPRA).",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Caution: ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "AT Assessors must be aware of and observe the law with regard to AT that is likely to restrain a participant. ",
                font: "Arial",
                color: "000000",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "National Disability Insurance Scheme (Restrictive Practices and Behaviour Support) Rules 2018",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: "The NDIA expects AT assessors to consider all options for addressing the participant’s disability related functional limitations and pursuing goals, including non-AT supports.",
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "NDIS AT Levels 3 & 4 trials: ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Where the AT assessor and participant need to work with an AT supplier to trial and develop a specification for the AT support, reasonable supplier costs can be quoted, and if agreed, claimed against the participant’s plan (category ‘rental/trial’). Supplier specification/order details are required with this assessment to enable the NDIS to consider quotes/prices from the supplier.",
                font: "Arial",
                color: "000000",
              }),
              new TextRun({
                text: "AT assessors can keep up to date at ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "NDIS provider assistive technology",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: ". Participants can keep up to date at ",
                color: "000000",
                font: "Arial",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "NDIS participant assistive technology",
                    style: "Hyperlink",
                  }),
                ],
                link: "https://docx.js.org",
              }),
              new TextRun({
                text: ".",
                color: "000000",
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            children: [new PageBreak()],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "1.	Part 1 – Participant and Plan Management Details",
                font: "Arial",
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "1.1	NDIS Participant Details",
                font: "Arial",
              }),
            ],
          }),
          //   Table Starting From Here
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Full Name",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Email",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "NDIS Coordinator",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Guardian Name",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Guardian Phone",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Date of Assessment",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Phone Number",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
                    shading: {
                      fill: "d0d0d0",
                      type: ShadingType.CLEAR,
                      color: "0d0d0d",
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "NDIS Number",
                            bold: true,
                            font: "Arial",
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
                            font: "Arial",
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
          // Table Ends
        ],
        //content part end
        footers: {
          default: new Footer({
            children: [],
          }),
        },
      },
    ],
  });
  return Packer.toBlob(doc).then((blob) => {
    saveAs(
      blob,
      "AnimalAssessment" + Math.random().toString(36).substring(2, 15) + ".docx"
    );
  });
};
