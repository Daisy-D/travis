class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction() {
        this.element.click(() => {
            // this.num = updateNum();
            this.num = addnum(this.num);
            // this.num++;
            if (this.num % 2 == 0) {
                this.element.css('font-size', '80px');
                $('#animation').addClass('num');
                setTimeout(() => {
                    $('#animation').removeClass('num');
                    axios.get('/api/update', {
                            params: {
                                id: 1
                            }
                        })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }, 100)
            } else {
                this.element.css('font-size', '100px');
            }
            console.log(this.num);
        })
    }
}
class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default Thumb