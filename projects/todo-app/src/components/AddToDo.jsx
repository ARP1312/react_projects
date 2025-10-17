function AddToDo() {
    return   <div class="container">

        <div class="row my-row">

            <div class="col-6">
                <label htmlFor="texts"></label>
                <input type="text" placeholder="Enter to do here" name="texts" id="texts" />
            </div>

            <div class="col-4">
                <label htmlFor="date1"></label>
                <input type="date" name="date1" id="date1" />
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-success my-button">Add</button>
            </div>
        </div>

    </div>
    
}



export default AddToDo;