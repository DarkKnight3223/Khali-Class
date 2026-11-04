// ------------------------------------------------------------------
// TIMETABLE DATA — edit this file only.
// For each classroom:
//   name     : room name/number
//   ac       : true if the AC is working, false if not
//   schedule : { Day: [ ["start", "end", "Subject / Section"], ... ] }
// Times use 24-hour "HH:MM" format. Each period is 50 minutes.
// Rooms with an empty schedule are always shown as free.
// ------------------------------------------------------------------

const ROOMS = [
  {
    name: "Room 201A",
    ac: true, // TODO: confirm AC status
    schedule: {
      Monday: [
        ["09:00", "09:50", "CSCI1303_FSTLIBERAL_1_2632_M"],
        ["10:00", "10:50", "LFSC1002_FSTLIBERAL_1_9900096_M"],
        ["11:00", "11:50", "STGM1011_FSTLIBERAL_1_503794_M"],
      ],
      Tuesday: [
        ["08:00", "08:50", "MATH1341_CIVILCA_1_2514_A"],
        ["10:00", "10:50", "HSMCH102_ECE_1_2121_C"],
        ["11:00", "11:50", "PHYS1291_CSE_1_4179_G"],
        // 15:00 slot is cut off in the photo (starts with "MAT...")
      ],
      Wednesday: [
        ["09:00", "09:50", "IENT1051_CSE_1_2133_G"],
        ["11:00", "11:50", "PHYS1291_CSE_1_4179_G"],
        ["14:00", "14:50", "24EECE2231_CSE_1_1666_B"],
      ],
      Thursday: [
        ["08:00", "08:50", "24EECE2231_CSE_1_1666_B"],
        ["09:00", "09:50", "PHYS1291_CSE_1_4179_G"],
        ["10:00", "10:50", "HSMCH102_ECE_1_2121_C"],
      ],
      Friday: [
        ["11:00", "11:50", "MATH2572_CSECS_1_503424_B"],
        ["14:00", "14:50", "MATH2572_CSEAIML_1_503413_B"], // faded in photo
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 202A",
    ac: true, // TODO: confirm AC status
    schedule: {
      Monday: [
        ["10:00", "10:50", "24EECE2231_CSE_1_1768_I"],
      ],
      Tuesday: [
        ["08:00", "08:50", "PHYS1291_CSE_1_2632_A"],
        ["09:00", "09:50", "IENT1051_CSE_1_2269_C"],
        ["10:00", "10:50", "MATH2572_CSE_1_2515_G"],
        ["13:00", "13:50", "MATH2572_CSEAIML_1_503413_D"],
      ],
      Wednesday: [
        ["10:00", "10:50", "MATH1351_BIOTECH_1_2550_A"],
        ["14:00", "14:50", "24EECE2231_CSE_1_1756_A"],
      ],
      Thursday: [
        ["08:00", "08:50", "24EECE2231_CSE_1_1756_A"],
        ["09:00", "09:50", "PHYS1291_CSE_1_2632_A"],
      ],
      Friday: [
        ["09:00", "09:50", "MATH1351_BIOTECH_1_2550_A"],
        ["11:00", "11:50", "PHYS1291_CSE_1_2632_A"],
        ["14:00", "14:50", "MATH2572_CSE_1_2550_D"], // faded in photo
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 101A",
    ac: true, // TODO: confirm AC status (not known yet)
    schedule: {
      Monday: [
        ["09:00", "09:50", "MATH2572_CSECS_1_4006_A"],
        ["11:00", "11:50", "CSCI1303_FSTLIBERAL_1_2632_L"],
        ["13:00", "13:50", "MATH2572_CSEAIML_1_503413_E"],
        ["14:00", "14:50", "MATH2572_CSE_1_2515_E"],
      ],
      Tuesday: [
        ["09:00", "09:50", "PHYS1291_CSE_1_2638_E"],
        ["10:00", "10:50", "IENT1051_CSE_1_2262_F"],
        ["11:00", "11:50", "CHEM1111_CSEAIML_1_2355_A"],
      ],
      Wednesday: [
        ["08:00", "08:50", "MATH1341_ECE_1_2514_A"],
        ["09:00", "09:50", "PHYS1001_ECE_1_2637_A"],
        ["10:00", "10:50", "LANG1242_ECE_1_2440_B"],
        ["11:00", "11:50", "LANG1242_ECE_1_2440_B"],
        ["14:00", "14:50", "LANG1242_FSTLIBERAL_1_2442_M"],
        ["15:00", "15:50", "Class (name unclear)"], // faded in photo, time from your note
      ],
      Thursday: [
        ["09:00", "09:50", "PHYS1291_CSE_1_2635_H"],
        ["10:00", "10:50", "PHYS1001_ECE_1_2637_A"],
        ["14:00", "14:50", "MECH1041_CIVILCA_1_502084_A"],
        ["15:00", "15:50", "Class (name unclear)"], // faded in photo, time from your note
      ],
      Friday: [
        ["08:00", "08:50", "PHYS1001_ECE_1_2637_A"],
        ["10:00", "10:50", "MATH2572_CSE_1_2515_E"],
        ["11:00", "11:50", "CHEM1111_CSEAIML_1_2311_E"],
        ["15:00", "15:50", "Class (name unclear)"], // faded in photo, time from your note
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 102A",
    ac: false, // TODO: confirm AC status (not known yet)
    schedule: {
      Monday: [
        ["09:00", "09:50", "MATH2572_CSE_1_2536_I"],
        ["10:00", "10:50", "HSMCH102_ECE_1_2261_A"],
      ],
      Tuesday: [
        ["08:00", "08:50", "24BTEN1001_BIOMEDICAL_1_501936_A"],
        ["08:00", "08:50", "24BTEN1001_BIOTECH_1_501936_A"],
        ["10:00", "10:50", "MATH2572_CSEAIML_1_503413_B"],
        ["11:00", "11:50", "HSMCH102_ECE_1_2261_A"],
      ],
      Wednesday: [
        ["09:00", "09:50", "IENT1051_CSE_1_2269_H"],
        ["10:00", "10:50", "LANG1242_MECH_1_503223_A"],
        ["10:00", "10:50", "LANG1242_RAI_1_503223_A"],
        ["11:00", "11:50", "LANG1242_MECH_1_503223_A"],
        ["11:00", "11:50", "LANG1242_RAI_1_503223_A"],
        ["14:00", "14:50", "Class (name unclear)"], // faded in photo, time from your note
      ],
      Thursday: [
        ["11:00", "11:50", "HSMCH102_ECE_1_2261_A"],
        ["14:00", "14:50", "Class (name unclear)"], // faded in photo, time from your note
      ],
      Friday: [
        ["09:00", "09:50", "MATH2572_CSE_1_2536_I"],
        ["10:00", "10:50", "MATH2572_CSECS_1_503424_B"],
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 206",
    ac: false, // TODO: confirm AC status (not known yet)
    schedule: {
      Monday: [
        ["09:00", "09:50", "CHEM1111_BIOTECH_1_502098_A"],
        ["10:00", "10:50", "ODHR1011_FSTLIBERAL_1_503794_K"],
        ["11:00", "11:50", "24EECE2221_MECH_1_1673_A"],
        ["11:00", "11:50", "24EECE2221_RAI_1_1673_A"],
        ["14:00", "14:50", "LFSC1002_FSTLIBERAL_1_502464_K"],
        ["15:00", "15:50", "MATH2572_CSE_1_502587_B"],
      ],
      Tuesday: [
        ["08:00", "08:50", "24EECE2221_MECH_1_1673_A"],
        ["08:00", "08:50", "24EECE2221_RAI_1_1673_A"],
        ["09:00", "09:50", "FPEA1222_FSTLIBERAL_1_502686_K"],
        ["10:00", "10:50", "IENT1051_CSE_1_2050_E"],
        ["11:00", "11:50", "MATH1341_ECEVLSIT_1_502877_A"],
        ["11:00", "11:50", "MATH1341_EEECA_1_502877_A"],
        ["14:00", "14:50", "LFSC1002_FSTLIBERAL_1_502464_K"],
        ["15:00", "15:50", "MATH2572_CSE_1_2550_F"],
      ],
      Wednesday: [
        ["08:00", "08:50", "CHEM1111_BIOTECH_1_502098_A"],
        ["09:00", "09:50", "PHYS1001_ECE_1_2652_B"],
        ["10:00", "10:50", "24EECE2231_CSE_1_1519_H"],
        ["15:00", "15:50", "MATH2572_CSEAIML_1_2542_C"],
      ],
      Thursday: [
        ["08:00", "08:50", "PHYS1291_CSE_1_501212_F"],
        ["09:00", "09:50", "24EECE2231_CSE_1_1516_E"],
        ["10:00", "10:50", "IENT1051_CSE_1_2050_E"],
        ["11:00", "11:50", "MATH2572_CSEAIML_1_2544_G"],
      ],
      Friday: [
        ["08:00", "08:50", "CHEM1141_FSTLIBERAL_1_502211_K"],
        ["09:00", "09:50", "24BTEN1001_BIOMEDICAL_1_501936_A"],
        ["09:00", "09:50", "24BTEN1001_BIOTECH_1_501936_A"],
        ["10:00", "10:50", "24EECE2231_CSE_1_1519_H"],
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 207",
    ac: false, // TODO: confirm AC status (not known yet)
    schedule: {
      Monday: [
        ["08:00", "08:50", "CHEM1111_CSEAIML_1_2311_E"],
        ["09:00", "09:50", "SOCY1082_FSTLIBERAL_1_502625_L"],
        ["10:00", "10:50", "CHEM1111_ECEVLSIT_1_2337_A"],
        ["10:00", "10:50", "CHEM1111_EEECA_1_2337_A"],
        ["11:00", "11:50", "24EECE2211_ECE_1_1791_A"],
        ["13:00", "13:50", "INFS1011_FSTLIBERAL_1_3012_L"],
        ["14:00", "14:50", "POLS1052_CSE_1_501935_A"],
        ["15:00", "15:50", "IENT1051_ECE_1_1511_A"],
      ],
      Tuesday: [
        ["09:00", "09:50", "SOCY1082_FSTLIBERAL_1_502625_L"],
        ["10:00", "10:50", "MATH1341_ECE_1_502877_B"],
        ["11:00", "11:50", "MATH2572_CSEAIML_1_503413_E"],
        ["14:00", "14:50", "POLS1052_CSE_1_503538_E"],
      ],
      Wednesday: [
        ["09:00", "09:50", "IENT1061_FSTLIBERAL_1_501515_K"],
        ["10:00", "10:50", "24EECE2231_CSE_1_1768_I"],
        ["11:00", "11:50", "CHEM1111_BIOMEDICAL_1_502623_A"],
        ["11:00", "11:50", "CHEM1111_CIVILCA_1_502623_A"],
        ["14:00", "14:50", "MATH1341_ECEVLSIT_1_502877_A"],
        ["15:00", "15:50", "CHEM1111_ECEVLSIT_1_2337_A"],
        ["15:00", "15:50", "CHEM1111_EEECA_1_2337_A"],
      ],
      Thursday: [
        ["08:00", "08:50", "24EECE2231_CSE_1_1659_G"],
        ["09:00", "09:50", "MATH2572_CSEAIML_1_2542_A"],
        ["11:00", "11:50", "IENT1051_FSTLIBERAL_1_502906_L"],
        ["13:00", "13:50", "INFS1011_FSTLIBERAL_1_3012_L"],
        ["14:00", "14:50", "24EECE2211_ECE_1_1791_A"],
        ["15:00", "15:50", "LANG1242_FSTLIBERAL_1_503306_L"],
      ],
      Friday: [
        ["08:00", "08:50", "CHEM1111_BIOTECH_1_502098_A"],
        ["09:00", "09:50", "CSCI1303_FSTLIBERAL_1_2638_K"],
        ["10:00", "10:50", "24EECE2231_CSE_1_1659_G"],
        ["11:00", "11:50", "SOCY1082_FSTLIBERAL_1_502268_K"],
        ["14:00", "14:50", "IENT1051_ECE_1_1511_A"],
      ],
      Saturday: [],
    },
  },
  {
    name: "Room 211",
    ac: false, // TODO: confirm AC status (not known yet)
    schedule: {
      Monday: [
        ["08:00", "08:50", "MATH1351_BIOTECH_1_2550_A"],
        ["09:00", "09:50", "CHEM1111_CSEAIML_1_2356_C"],
        ["10:00", "10:50", "MATH2572_CSEAIML_1_2544_G"],
        ["11:00", "11:50", "24EECE2211_ECE_1_1780_B"],
        ["14:00", "14:50", "POLS1052_CSE_1_503538_B"],
      ],
      Tuesday: [
        ["09:00", "09:50", "24EECE2211_BIOTECH_1_1763_A"],
        ["10:00", "10:50", "CHEM1111_CSEAIML_1_2333_F"],
        ["11:00", "11:50", "MATH2572_CSEAIML_1_2544_F"],
        ["14:00", "14:50", "IENT1051_CSE_1_2130_B"],
      ],
      Wednesday: [
        ["09:00", "09:50", "24EECE2211_BIOTECH_1_1763_A"],
        ["10:00", "10:50", "LFSC1002_FSTLIBERAL_1_9900096_M"],
        ["11:00", "11:50", "STGM1011_FSTLIBERAL_1_503794_M"],
        ["14:00", "14:50", "LANG1242_FSTLIBERAL_1_502319_K"],
        ["15:00", "15:50", "LANG1242_FSTLIBERAL_1_502319_K"],
      ],
      Thursday: [
        ["09:00", "09:50", "24EECE2231_CSE_1_1659_F"],
        ["10:00", "10:50", "CHEM1141_FSTLIBERAL_1_502211_K"],
        ["11:00", "11:50", "ODHR1011_FSTLIBERAL_1_503794_K"],
        ["13:00", "13:50", "MATH1341_ECEVLSIT_1_502877_A"],
        ["14:00", "14:50", "24EECE2211_ECE_1_1780_B"],
      ],
      Friday: [
        ["08:00", "08:50", "MATH2572_CSEAIML_1_2544_G"],
        ["09:00", "09:50", "MATH1341_CIVILCA_1_2514_A"],
        ["10:00", "10:50", "MATH2572_CSEAIML_1_503413_E"],
        ["11:00", "11:50", "MATH2572_CSE_1_2515_G"],
        ["14:00", "14:50", "LANG1242_ECE_1_2442_C"],
        ["15:00", "15:50", "LANG1242_ECE_1_2442_C"],
      ],
      Saturday: [],
    },
  },
  // Add the rest of your classrooms here, for example:
  // { name: "Room 203A", ac: true, schedule: { Monday: [["09:00","09:50","Subject"]] } },
];
