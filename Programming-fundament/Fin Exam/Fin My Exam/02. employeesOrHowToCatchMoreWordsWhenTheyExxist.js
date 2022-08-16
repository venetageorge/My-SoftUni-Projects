function employees(input) {
    let num = Number(input.shift());
    let namePattern = /(?<employee>[A-Z][a-z]{2,} [A-Z][a-z]{2,})#+(?<jobPosition>[A-Z]+[a-z]+(&?[A-Z][a-z])*(&?[A-Z]+[a-z]+)*)\d{2}(?<companyName>[A-Z]\w+ (?:JSC|Ltd\.))/g;
    let nameMatch = namePattern.exec(input);
   
    for (let i = 0; i < num; i++) {

        if (nameMatch) {
            let nameee = nameMatch.groups['employee'];
            let joob = nameMatch.groups['jobPosition'];
            let comp = nameMatch.groups['companyName'];
               
            console.log(`${nameee} is ${joob} at ${comp}`);

            nameMatch = namePattern.exec(input);

        }
    }
}
employees(["4",
"Tanya Petrova##Dental&Assistants25Health Ltd.",
"Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
"George Fill####Orderlies99Health JSC",
"Lily petrova#Speech&Pathology&Assistants60Health Ltd."]);
employees(["4",
"Peter PetrovPsychology&Teachers25School Ltd.",
"Kalin kalinov#Special Education Teachers00 School Ltd.",
"Lilyana Kuncheva#### Tutor999School JSC",
"Kliment Genchev#Teacher&Assistants20School Ltd."]);
employees(["2",
"Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
"Monica Hristova####Nuclear&Engineer99Station JSC"]);