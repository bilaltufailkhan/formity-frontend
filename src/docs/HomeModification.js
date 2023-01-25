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

export const HomeModification = async (data) => {
  const doc = new Document({
    creator: "Accrual Hub",
    title: "Complex Home Modification Report",
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
                    text: "Complex Home Modification Assessment Template",
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
                            text: data.fields.participant_name,
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
                            text: data.fields.participant_DOB,
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
                            text: data.fields.participant_age,
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
                            text: data.fields.NDIS_number,
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
                            text: data.fields.participant_address,
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
                            text: data.fields.participant_phone_num,
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
                            text: data.fields.participant_email,
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
                            text: data.fields.participant_contct_num,
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
                            text: data.fields.participant_guardian_phone,
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
                            text: data.fields.NDIS_support,
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
                            text: data.fields.contact_details,
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
                            text: data.fields.assessors_DOA,
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
                            text: "Date of Report",
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
                            text: data.fields.assessors_DOR,
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
                            text: "Agency Managed",
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
                            text: data.fields.agency_managed,
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
                            text: "Self-Managed",
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
                            text: data.fields.self_managed,
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
                            text: "Registered Plan Management Provider",
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
                            text: data.fields.plan_management,
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
                            text: data.fields.contact_detail,
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
          new Paragraph({
            children: [
              new TextRun({
                text: "2.2	Participant Goals",
                font: "Arial",
                bold: true,
                color: "000000",
                // break: 1,
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
                text: "2.3 Functional Assessment",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Outline the specific functional limitation/s related to the participant’s disability that indicate the need for the home modification as below;",
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
                text: "Current functional status, including functional outcomes on discharge if hospitalised, outlining anticipated optimum level of independence and participation in personal care and domestic activities within the home",
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
                text: "Details of any formal personal support / informal support and the impact of the proposed complex home modification that the participant requires to perform activities of daily living.",
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
                text: "Comment on the impact of any other non-disability related issues on the participant’s functioning. Consider whether assistive technology, additional capacity building supports would enable the participant to maximise their independence",
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
                text: "Consider the social and economic participation and the location of the participants home from their activities.",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.3.1",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Frequency of use of proposed modification.",
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
                            text: "Continuously / multiple times each day",
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
                            text: "Several times weekly",
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
                            text: "Other, provide details:",
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
                            text: data.fields.proposed_modifications,
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
                text: "2.3.2",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Is the Participant / Nominee in agreement with this AT request? Please describe.",
                font: "Arial",
                color: "000000",
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
                            text: "Yes",
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
                            text: "No",
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
                            text: "Comment",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.3.3",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Findings from functional assessment",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Table({
            columnWidths: [3333, 3333, 3333],
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
                      size: 3333,
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
                            text: "Assessment Area",
                            bold: true,
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Current Status",
                            font: "Arial",
                            bold: true,
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Expected future level of independence",
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
                      size: 3333,
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
                            text: "Mobility (Including the ability to use stairs and ramps)",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Transfers, consider bed, chair, toilet and car.",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Mobility aids, consider typical footprint and circulation space required for wheelchairs",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Upper limb / Hand function and reach",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Lifting and carrying capacity",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Functional cognitive status",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Other general safety issues",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
            ],
          }),
          new Table({
            columnWidths: [3333, 3333, 3333],
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
                      size: 3333,
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
                            text: "Personal ADL",
                            bold: true,
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Current Status",
                            font: "Arial",
                            bold: true,
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Expected future level of independence",
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
                      size: 3333,
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
                            text: "Toileting",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Dressing",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Showering/bathing Grooming",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
            ],
          }),
          new Table({
            columnWidths: [3333, 3333, 3333],
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
                      size: 3333,
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
                            text: "Domestic ADL",
                            bold: true,
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Current Status",
                            font: "Arial",
                            bold: true,
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Expected future level of independence",
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
                      size: 3333,
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
                            text: "Meal preparation",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Cleaning",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Laundry",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
            ],
          }),
          new Table({
            columnWidths: [3333, 3333, 3333],
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
                      size: 3333,
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
                            text: "Community Activities / Access",
                            bold: true,
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Current Status",
                            font: "Arial",
                            bold: true,
                            color: "#0d0d0d",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Expected future level of independence",
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
                      size: 3333,
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
                            text: "Recreation and leisure",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Driving and/or transportation in vehicle/cars",
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3333,
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
                            text: "Work and study issues",

                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3333,
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
                  new TableCell({
                    width: {
                      size: 3333,
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
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 3 – Property Details",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Home ownership",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1.1",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Please indicate the ownership status of the property being assessed. Where ownership is other than the participant, provide more details, e.g. name of real estate agency and contact number",
                font: "Arial",
                color: "000000",
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
                            text: "Participant owned",
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
                            text: "Co-owned",
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
                            text: "Private rental",
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
                            text: "Public rental / housing",
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
              }), // new table row here
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
                            text: "Family owned",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1.2",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Has the property had previous modifications funded by the NDIA? If ‘yes’, please outline previous modifications completed",
                font: "Arial",
                color: "000000",
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
                            text: "Yes",
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
                            text: "No",
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
                            text: "Details of previous modifications",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1.3",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Is the owner of the property aware of and provided written authorisation for the potential modifications?",
                font: "Arial",
                color: "000000",
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
                            text: "Yes",
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
                            text: "No",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.2",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Structure of property",
                font: "Arial",
                bold: true,
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please describe the construction type, e.g. brick or weatherboard, colour bond or tiled roof, approximate age or era, concrete slab or timber stumps",
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
                text: "3.3",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Description of property",
                font: "Arial",
                bold: true,
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please describe the layout and size, e.g. 3 bedroom residence with central bathroom and two living areas, single garage, porch at front and back entrances, medium sized home = approx 20 square metres block size approx 500 – 600 square metres, level block, etc.",
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
                text: "3.4",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Special Conditions",
                font: "Arial",
                bold: true,
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please outline any special conditions or considerations, e.g. heritage listed",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 4 – Social Situation",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4.1 Social Circumstances",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Detail the participant’s living arrangements, social background, relationship status and other information relevant to the need for home modifications",
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
                text: "4.2 Hospitalisation or Inpatient",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "If currently an inpatient, please outline which hospital, the current discharge plan and describe any interim arrangements while complex home modifications are completed such as short term accommodation. Describe other assistive technology as appropriate.",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "Anticipated discharge date",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Discharge plan details/Comments",
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
                text: "4.3 Proposed living arrangements (including post-discharge, where appropriate)",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Comments in this section will relate to decisions that have been made about where and who the participant will live with and how long it is expected they will reside in the house which is being considered for modification. Detail the participant’s expected long-term household/social situation and ousehold supports as well as the participant’s current family support and any known future plans or changes to this",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 5 – Complex Home Modification Recommendations",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "You should detail the participant’s existing home environment and provide clinical evidence for all home modification recommendation(s). Recommended specifications for access must be consistent with The NDIA document “Guidance for Builders and Designers” unless specifically referenced as an ‘exception’.",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "You must include:",
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
                text: "Recommendations, having considered all reasonable options",
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
                text: "Recommendations should reflect consideration of the requirements of the legislation to pay for the reasonable costs of home modifications required as a result of the participant’s disability.",
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
                text: "Clinical evidence for each aspect of your recommendations.",
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
                text: "Specific details to ensure recommendations for home modifications are comprehensive and meet the participant’s home modification needs",
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
                text: "Where relevant, details of any related modifications or equipment currently being used by the participant",
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
                text: "Where appropriate, provide diagrams and/or digital photographs of the home areas requiring modification",
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
                text: "Note the participant’s or family preferences separately to the assessor’s recommendations where applicable",
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
                text: "Under each area/room requiring modification below, please detail any changes required to door widths, fixtures, fittings, floor coverings etc.",
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
                text: "Recommendations comply with relevant Australian Standards",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Example Bathroom",
                font: "Arial",
                color: "000000",
                italics: true,
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
                            text: "N/A",
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
                            text: "Current Situation",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "Removal of bath and installation of a level-entry shower recess with hand-held shower hose.",
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
                            text: "Priority",
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
                            text: "1",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "The client is wheelchair dependent for all mobility and requires use of a mobile shower commode to enable them to shower independently, with no further change in mobility status anticipated.",
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
                text: "5.2 Externals",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "5.2.1 Front Access",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.2.2 Other Access",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.2.3 Car Parking",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3 Internals",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "5.3.1 Bedroom",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Suitable for participant to use (preferably located on ground floor). Please include doorways, flooring, lights, fixtures/fittings, door handles and light switches where applicable",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.2 Living Area",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please include doorways, flooring, lights, fixtures/fittings, door handles and light switches, circulation space where applicable",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.3 Hallway",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Internal steps to enable access to a suitable bedroom and bathroom. Please include doorways, flooring, lights, fixtures/fittings, door handles, light switches and width of corridors where applicable",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.4 Bathroom/Toilet",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Bathroom/toilet that would be suitable for participant to use (preferably located on ground floor). Please include doorways, flooring, lights, fixtures/fittings, door handles and light switches, hand rails, tap ware, shower hose, etc. where applicable. Describe if combined or separate",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.5 Kitchen",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please include doorways, flooring, lights, fixtures/fittings, door handles and light switches, hand rails, tap ware, etc. where applicable",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.6 Laundry",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please include doorways, flooring, lights, fixtures/fittings, door handles and light switches, hand rails, tap ware, etc. where applicable",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "data-field",
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
                            text: "Existing bathroom has a shower over the bath and there is no other wheelchair accessible bathroom in the home",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.3.7 Other/not included above",
                font: "Arial",
                color: "000000",
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
                            text: "N/A",
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
                            text: "Current Situation",
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
                            text: "data-field",
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
                            text: "Recommendations",
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
                            text: "data-field",
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
                            text: "Priority",
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
                            text: "data-field",
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
                            text: "Clinical Evidence",
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
                            text: "1",
                            font: "data-field",
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
                text: "5.4 Heating and Cooling",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please note, this modification applies only to participants with medically diagnosed thermoregulation impairment. Please provide details of current heating and cooling systems.",
                font: "Arial",
                color: "000000",
                bold: true,
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
                text: "5.5 Staged Process",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Please note, this modification applies only to participants with medically diagnosed thermoregulation impairment. Please provide details of current heating and cooling systems.",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),

          new Table({
            columnWidths: [5505, 3505],
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
                      size: 5505,
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
                            text: "Is a staged process for building modifications appropriate? Yes or No?",
                            bold: true,
                            font: "Arial",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3505,
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "e.g. first stage is to enable access for safe discharge from hospital and short term accommodation. The second stage is modifications to enable the participant to transition to long-term accommodation",
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
                text: "5.6 Exception to Disability Standards",
                font: "Arial",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please note in most cases compliance with Australian Standard 1428 Design for Access and Mobility Part 1 (General) (AS 1428.1) is not required but are examples of best practice.  Users of this template need to ensure they understand the relevant building codes, standards and regulations that relate to the state and location where the modification is planned",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 6 – Complex Home Modification Quotes",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please attach information from relevant builders, building project management meetings or relevant scope of works documents ",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 7 – Details of Assessor",
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
                // break: 1,
              }),
              new TextRun({
                text: "(indicate all relevant sections that apply) ",
                font: "Arial",
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
            children: [
              new TextRun({
                text: "Review by Building Construction Professional ",
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
          new Table({
            columnWidths: [8500, 1500],
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
                      size: 8500,
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
                            text: "Indicate where this report has been developed in consultation with a Building Construction Professional. The recommendations contained herein are viable for this property (including construction risks e.g. asbestos) and are proposed as the most suitable of all reasonable alternatives",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 8 – Consent to Collect and Share Your Information ",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "For the participant to complete",
                bold: true,
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "As a participant who requires home modification and/or assistive technology supports, the National Disability Insurance Agency (NDIA) may need to contact your service providers, health and medical practitioners to discuss information within your assistive technology assessment and quotation(s). This will assist the NDIA with determining whether your request for assistive technology funded support(s) can be provided to you under the NDIS.",
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "If you choose not to provide this consent, this may extend the time required in considering this request for assistive technology supports to be included in your NDIS plan.",
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Do you consent to the NDIA collecting and disclosing your information including from these third parties mentioned above, in relation to your assistive technology assessment and quotation?",
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
                            text: "Yes, I consent",
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
                            text: "No, I do not consent",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Participant’s Signature When I sign this form:",
                color: "000000",
                font: "Arial",
                break: 1,
              }),
            ],
          }),
          new Table({
            columnWidths: [8500, 1500],
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
                      size: 8500,
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
                            text: "I understand that I am giving consent to the NDIA to do the things with my information set out in this section. I understand that I can withdraw my consent for the NDIS to do things with my information at any time by letting the NDIA know.",
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
                      size: 8500,
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
                            text: "I understand that I can access the NDIA’s Privacy Notice and Privacy Policy on the NDIA website or by contacting the NDIA.",
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
                            text: "Date",
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
                            text: "Full name ",
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "If you have signed this Form on behalf of the NDIS participant,",
                color: "000000",
                font: "Arial",
                bold: true,
                break: 1,
              }),
              new TextRun({
                text: "please complete the details below. It is an offence to provide false or misleading information",
                color: "000000",
                font: "Arial",
              }),
              new TextRun({
                text: "We may require you to provide evidence of your authority to sign on behalf of the person.",
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
                            text: "Date",
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
                            text: "Full name ",
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
                            text: "Relationship to participant or person wishing to become an NDIS participant",
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
