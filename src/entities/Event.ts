module.exports =  class Event {
    private id: string;
    private event_type: string;
    private visit_id: string;
    private timestamp: string;
    private caregiver_id: string;
    private care_recipient_id: string;
    private mood: string;

    constructor(
        id: string = null,
        event_type: string,
        visit_id: string,
        timestamp: string,
        caregiver_id: string,
        care_recipient_id: string,
        mood: string
        ) {
        this.id = id
        this.event_type = event_type
        this.visit_id = visit_id
        this.timestamp = timestamp
        this.caregiver_id = caregiver_id
        this.care_recipient_id = care_recipient_id
        this.mood = mood
    }
}