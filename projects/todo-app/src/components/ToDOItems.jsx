function ToDOItems() {

    let item1 = 'buy milk';
    let date1 = '4/10/2025';
    return <div class="container">


        <div class="row my-row">

            <div class="col-6">
                {item1}
            </div>

            <div class="col-4">
                {date1}
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-danger my-button">Remove</button>
            </div>

        </div>

    </div>

}


export default ToDOItems;