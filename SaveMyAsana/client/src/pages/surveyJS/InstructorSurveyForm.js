Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
  title: "Yoga Instructor Survey",
  pages: [
    {
      name: "Yoga Instructor Survey",
      elements: [
        {
          type: "multipletext",
          name: "question8",
          title: "Contact",
          items: [
            { name: "First name", placeHolder: "First name" },
            { name: "Last name", placeHolder: "Last name" },
            { name: "Studio" },
            { name: "Location " }
          ],
          colCount: 2
        },
        {
          type: "checkbox",
          name: "car",
          title: "How long have you been teaching yoga?",
          isRequired: true,
          choices: [
            { value: "Ford", text: "0 -1 year" },
            { value: "Vauxhall", text: "1-5 years" },
            { value: "Volkswagen", text: "5-10 years" },
            { value: "Peugeot", text: "10+ years" }
          ],
          colCount: 4
        },
        {
          type: "checkbox",
          name: "question2",
          title: "What levels do you teach? (please check all that apply)",
          choices: [
            { value: "item1", text: "Introductory" },
            { value: "item2", text: "Beginner" },
            { value: "item3", text: "Intermediate" },
            { value: "item4", text: "Advanced" },
            { value: "item5", text: "Specialty" },
            { value: "item6", text: "Rehabilitative" }
          ],
          colCount: 4
        },
        {
          type: "checkbox",
          name: "question3",
          title: "What styles do you teach? (please check all that apply)",
          choices: [
            { value: "item1", text: "Vinyasa Flow" },
            { value: "item2", text: "Hatha" },
            { value: "item3", text: "Iyengar" },
            { value: "item4", text: "Viniyoga" },
            { value: "item5", text: "Core Yoga" },
            { value: "item6", text: "Yoga Sculpt" },
            { value: "item7", text: "Restorative" },
            { value: "item8", text: "Bikram" }
          ],
          colCount: 4
        },
        {
          type: "checkbox",
          name: "question4",
          title:
            "What special populations have you worked with (either privately or in group settings)?",
          choices: [
            { value: "item1", text: "Youth (5 - 12)" },
            { value: "item2", text: "Teens (13 - 19)" },
            { value: "item3", text: "Elite Athletes" },
            { value: "item4", text: "Dancers" },
            { value: "item5", text: "Injury: feet" },
            { value: "item6", text: "Injury: ankle" },
            { value: "item7", text: "Injury: knee" },
            { value: "item8", text: "Injury: spinal" },
            { value: "item9", text: "Injury: shoulder" },
            { value: "item10", text: "Injury: wrist" },
            { value: "item11", text: "condition: bone" },
            { value: "item12", text: "condition: arthritis" },
            { value: "item13", text: "condition: inflammatory" },
            { value: "item14", text: "condition: anxiety" },
            { value: "item15", text: "condition: heart" },
            { value: "item16", text: "illness: cancer" },
            { value: "item17", text: "Pre-Natal" },
            { value: "item18", text: "Post - Natal" }
          ],
          colCount: 3
        },
        {
          type: "checkbox",
          name: "question1",
          title:
            "What specialty training or certifications do you have? (please check all that apply)",
          choices: [
            { value: "item1", text: "Yoga for Kids" },
            { value: "item2", text: "Yoga for Teens" },
            { value: "item3", text: "Yoga for Elite Athletes" },
            { value: "item4", text: "Yoga for Dancers" },
            { value: "item5", text: "Pre-Natal Yoga" },
            { value: "item6", text: "Post-Natal Yoga" },
            { value: "item7", text: "Yoga for Spine Health" },
            { value: "item8", text: "Restorative Yoga" },
            { value: "item9", text: "Core Yoga" },
            { value: "item10", text: "Geriatric Yoga" },
            { value: "item11", text: "Yoga for Rehabilitation" },
            { value: "item12", text: "Yoga for 12 Step Recovery" },
            { value: "item13", text: "Yoga for Inflammatory Conditions" },
            { value: "item14", text: "Yoga for Healing from Trauma" }
          ],
          colCount: 2
        },
        {
          type: "checkbox",
          name: "question5",
          title:
            "What advanced training (academic or professional) do you have? (please check all that apply)",
          choices: [
            { value: "item1", text: "Licensed Physical Therapist" },
            { value: "item2", text: "Licensed Manual Therapist" },
            { value: "item3", text: "Psychiatrist" },
            { value: "item4", text: "Psychologist" },
            { value: "item5", text: "Cranio Sacral Therapist" },
            { value: "item6", text: "Doctor (General Practitioner)" },
            { value: "item7", text: "Doctor (Other Specialty)" },
            { value: "item8", text: "Phd" }
          ],
          colCount: 2
        },
        {
          type: "checkbox",
          name: "question6",
          title:
            "In addition to teaching classes, I offer:    (please check all that apply) ",
          choices: [
            { value: "item1", text: "Workshops" },
            { value: "item2", text: "In-Home Sessions" },
            { value: "item3", text: "Retreats" },
            { value: "item4", text: "Lectures" },
            { value: "item5", text: "Destination Classes/Retreats" },
            { value: "item6", text: "Teacher Trainings" }
          ],
          colCount: 2
        }
      ],
      title: "Yoga Instructor Survey"
    }
  ]
};

function sendDataToServer(survey) {
  survey.sendResult("8bbb761b-5a49-417d-9acf-876fe48a20c6");
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer_IS").Survey({
  model: survey,
  onComplete: sendDataToServer
});
