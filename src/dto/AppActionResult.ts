export class AppActionResult {
    private success: boolean = true;
    private messages: string[] = [];
    private data: any;

    getSuccess() {
        return this.success;
    }
    getMessage() {
        return this.messages;
    }
    getData() {
        return this.data;
    }
    setSuccess(success: boolean) {
        this.success = success;
    }
    setMessage(message: string) {
        this.messages.push(message);
    }
    setData(data: any) {
        this.data = data;
    }
}