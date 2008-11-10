Person = new JazzRecord.Model({
  table: "people",
  foreignKey: "person_id",
  belongsTo: { home: "homes"},
  hasOne: { vehicle: "vehicles"},
  columns: {
    name: "text",
    age: "number",
    home_id: "number",
    income: "float",
    has_vehicle: "bool"
  },
  events: {
    onUpdate: function() {
      puts("A person was updated");
    },
    onDestroy: function() {
      puts("A person was destroyed");
    }
  },
  
  validate: {
    atUpdate: function() {
      this.validatesIsInt("age");
      this.validatesIsFloat("income");
    },
    atSave: function() {
      this.validatesIsInt("age");
      this.validatesIsFloat("income");
    }
  }
});

Home = new JazzRecord.Model({
  table: "homes",
  foreignKey: "home_id",
  hasMany: { people: "people", students: "students"},
  columns: {
    style: "text",
    footage: "number",
    address: "text",
    vacant: "bool"
  }
});

Vehicle = new JazzRecord.Model({
  table: "vehicles",
  foreignKey: "vehicle_id",
  belongsTo: { owner: "people"},
  columns: {
    make: "text",
    model: "text",
    year: "number",
    person_id: "number"
  }
});

HighSchoolClass = new JazzRecord.Model({
  table: "high_school_classes",
  foreignKey: "high_school_class_id",
  hasAndBelongsToMany: { students: "students"},
  columns: {
    name: "text",
    room: "number"
  }
});

Student = new JazzRecord.Model({
  table: "students",
  foreignKey: "student_id",
  belongsTo: { home: "homes"},
  hasAndBelongsToMany: { classes: "high_school_classes"},
  columns: {
    name: "text",
    grade: "text",
    home_id: "number"
  }
});

Animal = new JazzRecord.Model({
  table: "animals",
  foreignKey: "animal_id",
  columns: {
    species: "text",
    say: "text"
  },
  modelMethods: {
    findTiger: function() {
      return this.findBy("species", "tiger");
    }
  },
  recordMethods: {
    speak: function() {
      puts(this["say"]);
    }
  }
});
