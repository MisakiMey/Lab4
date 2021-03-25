let sp = {
    data(){
        return {
            firstName: "Diana",
            lastName: "Yeshchenko",
            birthday: new Date(2022,1,16),
            message: "",
            time: new Date().getHours(),
            monthNames:["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
        }
    },
    computed:{
        printmessage(){
            let oneDay = 24*60*60*1000
            if (new Date().getMonth()===this.birthday.getMonth()&&new Date().getDay()===this.birthday.getDay()){
                return `Happy Birthday ${this.firstName} ${this.lastName}`
            }
            else {
                return `Sorry, ${this.firstName} ${this.lastName} you need to wait ${Math.floor(this.birthday.getTime()-new Date().getTime())/oneDay } days`
            }

        },
        greetings() {
            if (this.time <12){
                return "Good Morning!"
            }
            else if (this.time >12&&this.time<19){
                return "Good Evening!"
            }
            else {
                return "Good Night!"
            }

        },
        getDayInfo(){
            return `https://en.wikipedia.org/wiki/${this.monthNames[this.birthday.getMonth()-1]}_${this.birthday.getDate()}`
        }
    }
}
Vue.createApp(sp).mount("#app")