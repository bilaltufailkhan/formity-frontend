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

export const Continence = async (data) => {
  const doc = new Document({
    creator: "Accrual Hub",
    title: "Continence Report",
    description: "A brief example of using docx",
    styles: {
      default: {
        heading1: {
          run: {
            size: 50,
            bold: true,
            color: "6B2976",
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
    },

    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [
                  //   new ImageRun({
                  //     url: logo,
                  //     transformation: {
                  //       width: 100,
                  //       height: 100,
                  //     },
                  //   }),
                  new TextRun({
                    text: " Continence Related Assistive Technology Assessment Template",
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
                text: "Notes for AT Assessors of Continence AT Supports",
                font: "Arial",
                // break: 1,
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "AT Assessors have obligations under the NDIS Provider Terms of Business, Quality and Safeguards Commission and their respective professional registration under Australian Health Practitioner Regulation Agency (AHPRA).",
                font: "Arial",
                color: "000000",
                break: 1,
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
                text: "Quotations should be attached where applicable (items < $1500 may be funded from the CORE consumables budget and do not require an assessment and quote). Quotations can include printouts of web orders and stock numbers from relevant State based equipment suppliers where relevant.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "AT assessors can keep up to date at ",
                    font: "Arial",
                    color: "000000",
                  }),
                  new TextRun({
                    text: "NDIS provider assistive technology",
                    style: "Hyperlink",
                  }),
                  new TextRun({
                    text: ". Participants can keep up to date at ",
                    color: "000000",
                    font: "Arial",
                  }),
                ],
                link: "https://docx.js.org",
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
                text: "Notes for navigating and editing this document.",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "General Notes",
                font: "Arial",
                bold: true,
                color: "000000",
                size: 20,
              }),
              new TextRun({
                text: "This document is protected so that only editable fields can be changed but additional rows in tables can be inserted as required. ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "All editable fields have unlimited text entry, and the document will expand in page length when large amounts of text are entered.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Spelling and grammar can be checked according to the word processor you are using.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "The document can be navigated with just the Tab key to encompass varying modes of navigation and levels of computer skills ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "JAWS Specific Comments",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Ins + F1 will read document information including the general layout, header and footer information",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Ins + F6 will bring up a headings list allowing a JAWS user to jump to heading sections if desired",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Ins + F7 will bring a list of web links embedded in the document.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Ins + Z will turn on quick navigation fields so a JAWS user can use say “H” to jump to the next heading for easy navigation.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 1 – Participant and Plan Management Details",
                font: "Arial",
                // break: 1,
              }),
              new TextRun({
                text: "1.1	NDIS Participant Details ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),

          //   Table 1 Starting From Here
          new Table({
            columnWidths: [3505, 5505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
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
                            text: "Name",
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
                            text: data.fields.name,
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
                            text: "Date of Birth",
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
                            text: data.fields.date_of_birth,
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
                            text: "Age",
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
                            text: data.fields.age,
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
                            text: "Address",
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
                            text: data.fields.address,
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
                            text: "Contact Telephone Number",
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
                            text: "Preferred Contact Method",
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
                            text: data.fields.preferred_contact_method,
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
                            text: "Nominee or Guardian Name",
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
                            text: "Nominee or Guardian Phone",
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
                            text: "NDIS Support Coordinator",
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
                            text: data.fields.ndis_coordinator,
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
                            text: "Contact Details",
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
                            text: data.fields.cotact_details,
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
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "1.2	Plan Management Details",
                font: "Arial",
                bold: true,
                color: "000000",
                // break: 1,
              }),
            ],
          }),

          //   Table 2 Start
          new Table({
            columnWidths: [3505, 5505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
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
                            text: data.fields.ndis_coordinator,
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
                            text: data.fields.date_of_assessment,
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
          //   Table 2 End

          new Paragraph({
            children: [new PageBreak()],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 2 – Assessment",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.1	Background ",
                font: "Arial",
                bold: true,
                color: "000000",
                // break: 1,
              }),
              new TextRun({
                text: "General: Describe participant’s current status which may include diagnosis, prognosis, co-existing conditions, disability, personal and instrumental activities of daily living, formal and informal support arrangements and life transitions. Consider health issues and other related aspects that may influence the need for continence support. ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),

          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 30,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.background,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.2	Participant Goals ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "If the participant’s NDIS plan has been made available, you can refer to the statement of participant’s goals and outline those relevant to the AT solution.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.participant_goals,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.3	Functional Assessment",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Note current level of function related to disability and impact on life roles: skin integrity issues; rapidly changing condition – including cognitive issues; dexterity and mobility issues. Consider the need for a support person to assist with the use of continence products. Does the participant currently need assistance to use their continence items? What assistance do they currently get? Will your recommendations result in a change in personal care needs? What assistance will the participant need?",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "NDIS expects relevant assessments are conducted where required and records held by AT assessor for NDIS audit purposes. ",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.functional_assessment,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Indicate type of loss",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [3505, 5505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
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
                            text: "Bladder",
                            font: "Arial",
                            color: "#0d0d0d",
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
                            text: data.fields.bladder,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
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
                            text: "Bowel",
                            font: "Arial",
                            color: "#0d0d0d",
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
                            text: data.fields.bowel,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.4	Current Continence products in use ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [3000, 1500, 3500, 2000],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3000,
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
                            text: "Type of Continence Product",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Usage",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Participant’s report of suitability",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2000,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Does it need reassessment Yes/No",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3000,
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
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2000,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3000,
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
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2000,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.5 	Consideration of health and other issues",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "2.5.1 Summarise recommendations from allied health and/or medical assessments.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields
                              .consideration_of_health_and_other_issues,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.5.2 Are further health, medical assessments, AT solutions and/or advice required from any of the following health or allied health professionals? Yes/No",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Indicate relevant health professional.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [3505, 5505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
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
                            text: "Physiotherapist",
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
                            text: data.fields.physiotherapist,
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
                            text: "Dietician",
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
                            text: data.fields.dietician,
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
                            text: "Occupational Therapist",
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
                            text: data.fields.occupational_therapist,
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
                            text: "Psychologist",
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
                            text: data.fields.psychologist,
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
                            text: "General Practitioner",
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
                            text: data.fields.general_practitioner,
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
                            text: "Medical Specialist",
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
                            text: data.fields.medical_specialist,
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
                            text: "Other",
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
                            text: "data.fields.other",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "If yes, please provide the following information.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: "Has the participant agreed to seek this assessment and/or advice?",
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
                text: "Is the participant aware that the NDIS cannot fund mainstream medical and health services?",
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
                text: "Describe the additional continence product/training needs identified by participant/Continence Assessor? ",
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
                text: "Are other AT solutions or environmental adaptations/home modifications such as toileting AT or bathroom modifications required ?",
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
                text: "Does the participant demonstrate behaviours of concern and have a behaviour support plan for restrictive practice?",
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
                text: "How might the outcome of this advice change the recommended NDIS continence supports to pursue the participant’s goals? ",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Text will be dynamicaly adjusted here",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 3 - Exploration of Continence Interventions and Options",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Thorough list of alternatives including use of other supports and approaches. Where trials have been conducted please give details of where the trials took place and for how long.",
                font: "Arial",
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "NOTE: Training in device use is included and expected to be accomplished within 2 hours. Provide rationale and hours required if more extensive or specific training is indicated.",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [1670, 1670, 1670, 1670, 1670, 1670],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1670,
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
                            text: "Option",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Describe potential options trialled in relation to goal attainment",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Trialled (T) or Considered (C)? Include trial details (timing, location)",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Advantages",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Disadvantages",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Estimated hours for training & review",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1670,
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
                            text: data.fields.evaluation_option1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.potential_option1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.trial_option1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.advantage1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.disdvantage1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.estimatedTime1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1670,
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
                            text: data.fields.evaluation_option2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.potential_option2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.trial_option2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.advantage2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.disdvantage2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.estimatedTime2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1670,
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
                            text: data.fields.evaluation_option3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.potential_option3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.trial_option3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.advantage3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.disdvantage3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.estimatedTime3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1670,
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
                            text: data.fields.evaluation_option4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.potential_option4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.trial_option4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.advantage4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.disdvantage4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1670,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.estimatedTime4,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 4 – Continence Recommendations",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.1",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "  Provide specific evidence that the supports/products described will enable the participant to pursue their identified goals and be of long-term benefit considering both current and future needs.",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.specific_evidence,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.2",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 Are there additional features, customisation or specification recommended that is considered to be above the minimum or standard level for this support? Please provide the specific evidence or clinical justification for these.",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.additional_feature,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.3",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 Description of continence products and/or AT solution. Detail all necessary components required to meet participant’s goal. This must be detailed enough to ensure that the item can be accurately supplied (attach completed supplier(s) specification/quotes as required).",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [3500, 1500, 2500, 2500],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3500,
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
                            text: "Item",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Quantity",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Frequency of supply required. (not usually more frequent than quarterly)",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "State/territory specification/item ID",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3500,
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
                            text: data.fields.item1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.quantity1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.frequency1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.StateSpecification1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3500,
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
                            text: data.fields.item2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.quantity2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.frequency2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.StateSpecification2,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3500,
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
                            text: data.fields.item3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.quantity3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.frequency3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.StateSpecification3,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Table({
            columnWidths: [7500, 2500],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "Participant’s preferred supplier (optional):",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.preferred_supplier1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "Is recommendation in line with supplier product use guidance? Yes/No",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.SPUG1,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "4.4",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 The participant is to be provided with product information and instructions for use including any precautions. Specify who is to do this and when.",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.information_instructions_field,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.5",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 Is urgent supply required?	 Yes/No Details",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.urgentSupply,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.6",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 Continence product order detail is attached (as advised by supplier(s))",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [7500, 2500],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "State/Territory Scheme specification (optional)",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.schemeSpecification,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "Other supplier’s specification (optional)",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.supplier_specification,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Table({
            columnWidths: [9505],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 9505,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Text will be dynamicaly adjusted here",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.7",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "	 Participant Agreement",
                font: "Arial",
                color: "000000",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Does the participant agree with the recommended continence assessment and products? (Are the assessor’s clinical recommendations and participant preference the same?)",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Table({
            columnWidths: [5000, 5000],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Yes",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: data.fields.participant_agreement,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "No",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Please provide details",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    height: {
                      size: 4000,
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
                            text: "Field Data",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 5 – Details of Assistive Technology Assessor",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "DECLARATION ",
                font: "Arial",
                bold: true,
                color: "000000",
              }),
              new TextRun({
                text: "(indicate all relevant sections that apply)",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Table({
            columnWidths: [7500, 2500],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "I certify that I meet the NDIA expectations of AT assessor provider suitability (including understanding of the current NDIS Act, Rules and Operational Guidelines) to assess the type of assistive technology and associated supports, at the level of complexity required by this participant.",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.NDIA_expectation,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "I will provide appropriate evidence to the NDIA and/or Quality and Safe Guards Commission if and as requested.",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.appropriate_evidence,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "I understand and acknowledge that the NDIA and participant will rely on my professional advice to select, source and implement this assistive technology.",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.NDIA_understanding,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 7500,
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
                            text: "This assistive technology has been assessed by the treating multi-disciplinary team and I have completed the AT assessment on behalf of that team.",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.accessing_team,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Assessor`s Details",
                bold: true,
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [2500, 7500],
            margins: {
              top: 50,
              bottom: 50,
              left: 50,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "Name",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.assessors_name,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "NDIS Provider Registration number (where applicable)",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.registration_number,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "Phone",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "Signature",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Signature Here",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "Qualification",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.qualification,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.date_assessment,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2500,
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
                            text: "Date of Report",
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 7500,
                      type: WidthType.DXA,
                    },

                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.fields.reportDate,
                            font: "Arial",
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Paragraph({
            children: [new PageBreak()],
          }),
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
    saveAs(blob, Math.random().toString(36).substring(2, 15) + ".docx");
  });
};
