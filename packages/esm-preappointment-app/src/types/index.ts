type PreAppointment = {
  result: Array<PreAppointmentResult>;
};

type PreAppointmentResult = {
  person_id;
  ccc_number;
  ovcid_id;
  upi_number;
  program;
  predicted_risk;
  week;
  predicted_prob_disengage;
  prediction_generated_date;
  sms_delivery_status;
  rtc_date;
  follow_up_type;
  follow_up_reason;
  rescheduled_date;
  reschedule_appointment;
  contact_reached;
  attempted_home_visit;
  reason_not_attempted_home_visit;
  was_client_found;
  comments;
  reason_client_not_found;
  home_visit_personnel;
  was_follow_up_successful;
  number_of_failed_phone_attempts;
  patient_uuid;
  uuid;
  gender;
  birthdate;
  age;
  person_name;
  identifiers;
  phone_number;
  latest_rtc_date;
  latest_vl;
  vl_category;
  latest_vl_date;
  last_appointment;
  cur_meds;
  previous_vl;
  previous_vl_date;
  nearest_center;
  covid_19_vaccination_status;
  sms_consent_provided;
  patient_category;
  sms_receive_time;
  tb_screening_date;
  tb_screening_result;
  cervical_screening_date;
  cervical_screening_method;
  cervical_screening_result;
};
