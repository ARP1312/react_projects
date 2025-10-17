function ToDoItem2(params) {

    let item2 = 'Go to collage';
    let date2 = '4/10/2025';
    return <div class="container">
        <div class="row my-row">

            <div class="col-6">
                {item2}
            </div>

            <div class="col-4">
                {date2}
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-danger my-button">Remove</button>
            </div>

        </div>

    </div>

}


export default ToDoItem2;