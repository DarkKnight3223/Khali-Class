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
  // Add the rest of your classrooms here, for example:
  // { name: "Room 203A", ac: true, schedule: { Monday: [["09:00","09:50","Subject"]] } },
];
