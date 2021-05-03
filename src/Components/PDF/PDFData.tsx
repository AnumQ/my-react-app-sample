import React from "react";

import {
  Page,
  Text,
  View,
  PDFViewer,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register Font
// Font.register({
//   family: "Open Sans",
//   fonts: [
//     {
//       src:
//         "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
//     },
//     {
//       src:
//         "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
//       fontWeight: 600,
//     },
//   ],
// });

const row = {
  flexDirection: "row",
  paddingLeft: 30,
  // backgroundColor: "yellow",
  display: "flex",
};

const bold = {
  fontFamily: "Helvetica-Bold",
};

const normal = {
  fontFamily: "Helvetica",
};
const textSize = {
  fontSize: 10,

  // marginRight: 1,
};

const textSizeBold = {
  ...textSize,
  ...bold,
};

const textSizeNormal = {
  ...textSize,
  ...normal,
};
const docTitle = "iSNITT Timeliste April 2021";
const title = "Timeliste April 2021";

const border = "1px solid #efefef";
const emptyCell = {
  borderColor: "#efefef",
  padding: 5,
  paddingTop: 5,
};

const borderBoxLeft = {
  ...emptyCell,
  width: "15%",
};
const borderBoxLeftHorizontal = {
  ...borderBoxLeft,
};

const firstCol = (borderBottom = false) => {
  return {
    ...borderBoxLeftHorizontal,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: borderBottom ? 1 : 0,
    // for site display
    borderTop: border,
    borderRight: border,
    borderLeft: border,
    borderBottom: borderBottom ? border : "",
  };
};
const secondCol = (borderBottom = false) => {
  return {
    ...borderBoxLeftHorizontal,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: borderBottom ? 1 : 0,

    borderTop: border,
    borderRight: border,
    borderBottom: borderBottom ? border : "",
    // borderLeft: border,
  };
};

const thirdCol = (borderBottom = false) => {
  return {
    ...emptyCell,
    borderTopWidth: 1,
    borderBottomWidth: borderBottom ? 1 : 0,
    borderRightWidth: 1,
    width: "65%",
    textAlign: "left",
    borderTop: border,
    borderRight: border,
    borderBottom: borderBottom ? border : "",
  };
};

const data = [
  { date: "1", hours: 4, desc: "Henting av data osv." },
  { date: "2", hours: 4, desc: "Henting av data osv." },
  {
    date: "3",
    hours: 2,
    desc:
      "Utvikling: Authorization on server-side on the remaining API calls, add Authorization header on calls from Client-side. Refactor code. Refactor files on server",
  },
  {
    date: "4",
    hours: 4,
    desc:
      "Utvikling: Funksjonaliteten på kommentarer, legge til kommentar, slette kommentar til booking i isnitt database. Bugfix: Forrige bookings data er sendt til fiken/ feil kommentarer vises. Løst bug med reset av invoice objekt ved nytt søk eller ved lukking av modal.\nBugfix: Martin fikk 401 ved henting av produkter/prosjekter første gang. Fikse slik at token til Autentisering sendes riktig. Legge på sjekk i server for å sjekke at innsendt token ikke er null.\nRefaktorering og opprydding i koden. \nUtvikling: Format endring i invoiceText. \nUtvikling: Sortere prosjekter og produkter etter navn. \nUtvikling: Spør om bekreftelse før sletting av kommentar. Kommunikasjon med Martin (planlegging, sette opp nye oppgaver i trello)",
  },
];

export const PDFData = () => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 30,
        }}
      >
        <Text>{title}</Text>
      </View>
      <View style={row}>
        <View style={firstCol()}>
          <Text debug={false} style={textSizeBold}>
            Prosjekt:
          </Text>
        </View>
        <View style={secondCol()}>
          <Text style={textSizeBold}>iSNITT</Text>
        </View>
        <View style={thirdCol()}>
          <Text style={textSizeBold}></Text>
        </View>
      </View>
      <View style={row}>
        <View style={firstCol()}>
          <Text debug={false} style={textSizeBold}>
            Måned:
          </Text>
        </View>
        <View style={secondCol()}>
          <Text style={textSizeBold}>April 2021</Text>
        </View>
        <View style={thirdCol()}>
          <Text style={textSizeBold}></Text>
        </View>
      </View>
      <View style={row}>
        <View style={firstCol()}>
          <Text debug={false} style={emptyCell}></Text>
        </View>
        <View style={secondCol()}>
          <Text style={emptyCell}></Text>
        </View>
        <View style={thirdCol()}>
          <Text style={emptyCell}></Text>
        </View>
      </View>

      <View style={row}>
        <View style={firstCol()}>
          <Text debug={false} style={textSizeNormal}>
            Dato
          </Text>
        </View>
        <View style={secondCol()}>
          <Text style={textSizeNormal}>Timer</Text>
        </View>
        <View style={thirdCol()}>
          <Text style={textSizeNormal}></Text>
        </View>
      </View>

      {data.map((item, index) => (
        <View key={index} style={row}>
          <View style={firstCol()}>
            <Text debug={false} style={textSizeNormal}>
              {item.date}
            </Text>
          </View>
          <View style={secondCol()}>
            <Text style={textSizeNormal}>{item.hours.toString()}</Text>
          </View>
          <View style={thirdCol()}>
            <Text style={textSizeNormal}> {item.desc}</Text>
          </View>
        </View>
      ))}

      <View style={row}>
        <View style={firstCol()}>
          <Text debug={false} style={textSizeBold}>
            Sum
          </Text>
        </View>
        <View style={secondCol()}>
          <Text style={textSizeBold}>
            {data.map((item) => item.hours).reduce((a, b) => a + b, 0)}
          </Text>
        </View>
        <View style={thirdCol()}>
          <Text style={textSizeNormal}></Text>
        </View>
      </View>

      {/* last row */}
      <View style={row}>
        <View style={firstCol(true)}>
          <Text debug={false} style={emptyCell}></Text>
        </View>
        <View style={secondCol(true)}>
          <Text style={emptyCell}></Text>
        </View>
        <View style={thirdCol(true)}>
          <Text style={emptyCell}></Text>
        </View>
      </View>
    </>
  );
};
