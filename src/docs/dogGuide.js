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

export const DogGuide = async (data) => {
  const doc = new Document({
    creator: "Accrual Hub",
    title: "Dog Guide Assessment Report",
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
                    text: "Dog Guide Assessment Template",
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
                text: "Notes for Assistive Technology (AT) Assessors of Dog Guide Supports",
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
                            text: data.fields.participant_dateOfBirth,
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
                            text: data.fields.participant_contact,
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
                            text: data.fields.preferred_contact,
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
                            text: data.fields.support_coordinator,
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
                            text: data.fields.management_provider,
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
                text: "PART 2 – Evaluation and Assessment",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2.1 Vision Background ",
                font: "Arial",
                bold: true,
                color: "000000",
                // break: 1,
              }),
              new TextRun({
                text: "Describe participant’s vision diagnosis and functional vision information.",
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
                            text: data.fields.vision_background,
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
                text: "2.2	Background Information ",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Include information about the participant’s current mobility including travel routes the participant can currently do, or has the capacity to do (with any current mobility aids or equipment used) without the use of a dog guide.",
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
                            text: data.fields.info_background,
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
                text: "2.3	Participant Goals",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "If the participant’s NDIS plan has been made available, you can refer to the statement of participant’s goals and outline those relevant to the dog guide request. Include any other relevant mobility goals.",
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
                text: "2.4	Dog Guide Assessor Information: Participant Suitability",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Outline the participant’s suitability to be a dog guide user. Evidence may include outcomes from an experiential walk or previous dog guide experience. Previous dog guide history should include information regarding the length of the working partnership and reasons for the partnership ending.",
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
                            text: data.fields.participant_suitability,
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
                text: "2.5	Dog Guide Assessor Information: Expected Differences",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Either detail information regarding any expected differences in the participant’s ability to travel independently with the dog guide. Including:",
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
                text: "any changes to the type, frequency and duration of travel routes",
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
                text: "any changes to additional community access supports i.e. an outline of formal and informal support currently required to access the community and if and how this will change with the implementation of a dog guide",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Or, in the instance that a participant has a dog guide that is soon to retire, you should note this, and indicate the extent of independence lost in similar lines, if a further dog guide is not available.",
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
                text: "2.6	Other Relevant Information",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Provide any relevant medical information (such as allergies, cognitive, psychosocial, other physical impairment or cardiopulmonary conditions that would limit mobility) that impact on the participant’s current and ongoing ability to use the dog guide. A medical report supporting the use of the dog guide is recommended.",
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
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "PART 3 - Recommended Option",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1 Most Suitable / Appropriate Alternative to facilitate goal attainment",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Briefly summarise the evidence for the recommended option as the most suitable/appropriate alternative which will facilitate attainment of the participant’s goal compared to others considered, including lower cost alternatives. (N.B. in the instance where previous dog guide relationship failed, evidence of actions to reduce the risk of repeat issues)",
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
                            text: data.fields.goal_attainment,
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
                text: "3.2 Additional Features",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Are there any additional features, customisation or specification recommended that is considered to be above the minimum or standard level of this support for reasonable and necessary funding? (E.g. customised harness, the requirement for additional training hours (that is: training that is considered above the ‘usual’ amount), and additional maintenance costs)",
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
                text: "3.2 Participant Agreement",
                font: "Arial",
                bold: true,
                color: "000000",
                break: 1,
              }),
              new TextRun({
                text: "Does the participant agree with the recommended AT solution?  (Are the assessor’s clinical recommendation and participant preference the same?)",
                font: "Arial",
                color: "000000",
                break: 1,
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
                            text: "Please Provide detail",
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
                            text: data.fields.agreement_detail,
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
                text: "PART 4 - Attachments",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please attach:",
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
                text: "A detailed quote outlining the full cost of any assessment, training, matching and follow-up associated with the cost of the dog guide purchase.",
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
                text: "Medical Report (as outlined in section 2.6 if relevant).",
                font: "Arial",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Please Note: for an approved dog guide, funding for the extra in maintenance costs would be considered to reflect the higher costs of a dog guide over those of an equivalent companion animal/pet. The NDIS will provide an appropriate annual maintenance cost which the participant can use to pay for reasonable and necessary dog guide maintenance costs (including food, grooming, flea and worm treatments, medication, vaccinations, veterinary costs and/or insurance).",
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
                            text:
                              data.fields.NDIA_expectations === true
                                ? "Yes"
                                : "",
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
                            text:
                              data.fields.appropraite_evidence === true
                                ? "Yes"
                                : "",
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
                            text:
                              data.fields.professional_advice === true
                                ? "Yes"
                                : "",
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
                            text:
                              data.fields.multi_disciplinary === true
                                ? "Yes"
                                : "",
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
                            text: data.fields.pro_reg_number,
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
                            text: data.fields.assessors_phone_num,
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
                            text: data.fields.assessors_email,
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
                            text: data.fields.assessors_signature,
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
                            text: data.fields.assessors_qualification,
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
                            text: data.fields.date_of_report,
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
                text: "PART 6 – Consent to Collect and Share Your Information – Provider AT Assessment and Quotation(s)",
                font: "Arial",
                // break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "For the participant to complete ",
                font: "Arial",
                bold: true,
                color: "000000",
              }),
              new TextRun({
                text: "As a participant who requires assistive technology supports, the National Disability Insurance Agency (NDIA) may need to contact your AT assessor and / or AT supplier to discuss information within your assistive technology assessment and quotation(s). This will assist the NDIA with determining whether your request for assistive technology support(s) can be provided to you under the NDIS. Do you consent to the NDIA collecting and disclosing your information including from these third parties mentioned above, in relation to your assistive technology assessment and quotation?",
                font: "Arial",
                color: "000000",
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
                            text:
                              data.fields.consent_decision === true
                                ? "Yes"
                                : "",
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
                            text:
                              data.fields.consent_decision === false
                                ? "No"
                                : "",
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
                            text: "Participant’s Signature",
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
                            text: "",
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
                            text:
                              data.fields.consent_declaration1 === true
                                ? "Yes"
                                : "",
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
                            text:
                              data.fields.consent_declaration2 === true
                                ? "Yes"
                                : "",
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
                            text: "",
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
                            text: data.fields.quotation_date,
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
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "If you have signed this Form on behalf of the NDIS participant.",
                font: "Arial",
                color: "000000",
                bold: true,
                break: 1,
              }),
              new TextRun({
                text: "please complete the details below. It is an offence to provide false or misleading information.",
                font: "Arial",
                color: "000000",
              }),
              new TextRun({
                text: "We may require you to provide evidence of your authority to sign on behalf of the person.",
                font: "Arial",
                color: "000000",
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
                            text: "",
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
                            text: data.fields.form_signning_date,
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
                            text: "Full Name of person completing this form. (please print)",
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
                            text: data.fields.fullname_formComplition,
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
                            text: "Relationship to participant or person wishing to become an NDIS participant:",
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
                            text: data.fields.person_relationship,
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
