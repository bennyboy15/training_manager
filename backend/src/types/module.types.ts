enum TrainingType {
  ONLINE,
  IN_PERSON
}

export type createModuleInput = {
    id: String;
    title: String;
    description?: String;
    durationMinutes?: Number;
    trainingType?: TrainingType;
    expiryMonths?: Number;
    createdAt: Date
    createdById: String;
}

export type updateModuleInput = {
    title?: String;
    description?: String;
    durationMinutes?: Number;
    trainingType?: TrainingType;
    expiryMonths?: Number;
}