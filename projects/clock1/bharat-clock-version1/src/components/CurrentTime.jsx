let CurrentTime = () => {

let time = new Date();



return <p className="text-primary">This is the current Date & Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>

};


export default CurrentTime;