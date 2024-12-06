function toBMI(Weight, Height) {
    let value = Weight / ((Height / 100) * (Height / 100))
    if (value >= 30) {
        document.getElementById("result").innerHTML = "BMI ของคุณคือ " + value.toFixed(2) + " อ้วนมาก"
    } else if (value >= 25) {
        document.getElementById("result").innerHTML = "BMI ของคุณคือ " + value.toFixed(2) + " อ้วน"
    } else if (value >= 23) {
        document.getElementById("result").innerHTML = "BMI ของคุณคือ " + value.toFixed(2) + " น้ำหนักเกิน"
    } else if (value >= 18.6) {
        document.getElementById("result").innerHTML = "BMI ของคุณคือ " + value.toFixed(2) + " น้ำหนักปกติ เหมาะสม"
    } else if (value <= 18.5) {
        document.getElementById("result").innerHTML = "BMI ของคุณคือ " + value.toFixed(2) + " ผอมเกินไป"
    } else {
        document.getElementById("result").innerHTML = "กรุณากรอกน้ำหนักหรือส่วนสูงให้ถูกต้อง"
    }
    return value.toFixed(2)
}
function toAge(Age) {
    let value = Age
    if (Age >= 0 && Age <= 12) {
        document.getElementById("result").innerHTML = "อายุของคุณคือ " + value.toFixed(0) + "ปี" + " ช่วงอายุของคุณคือ วัยเด็ก" + "<br>" + "คำอธิบาย" + "<br>" + "ต้องกินอาหารที่มีโปรตีนและแคลเซียมสูง เพื่อใช้ในการสร้างกล้ามเนื้อและกระดูก"
    } else if (Age >= 13 && Age <= 19) {
        document.getElementById("result").innerHTML = "อายุของคุณคือ " + value.toFixed(0) + "ปี" + " ช่วงอายุของคุณคือ วัยรุ่น" + "<br>" + "คำอธิบาย" + "<br>" + "เด็กผู้ชายเริ่มมีหนวดเครางอก เสียงเริ่มห้าว เด็กผู้หญิงเริ่มมีหน้าอก เอวเริ่มคอด สะโพกเริ่มผายและเริ่มมีระดู"
    } else if (Age >= 20 && Age <= 39) {
        document.getElementById("result").innerHTML = "อายุของคุณคือ " + value.toFixed(0) + "ปี" + " ช่วงอายุของคุณคือ วัยหนุ่มสาว" + "<br>" + "คำอธิบาย" + "<br>" + "ถือว่าโตเต็มวัยแล้ว กล้ามเนื้อแข็งแรง อวัยวะทุกส่วนทำงานได้อย่างสมบูรณ์"
    } else if (Age >= 40 && Age <= 59) {
        document.getElementById("result").innerHTML = "อายุของคุณคือ " + value.toFixed(0) + "ปี" + " ช่วงอายุของคุณคือ วัยกลางคน" + "<br>" + "คำอธิบาย" + "<br>" + "ความแข็งแรงของกล้ามเนื้อลดลง การทำงานของอวัยวะต่าง ๆ เริ่มเสื่อมถอยลง"
    } else if (Age >= 60) {
        document.getElementById("result").innerHTML = "อายุของคุณคือ " + value.toFixed(0) + "ปี" + " ช่วงอายุของคุณคือ วัยชรา" + "<br>" + "คำอธิบาย" + "<br>" + "การมองเห็นและการได้ยินลดน้อยถอยลง ระบบการทำงานของอวัยวะภายในเริ่มมีปัญหา"
    } else {
        document.getElementById("result").innerHTML = "กรุณากรอกอายุของคุณให้ถูกต้อง"
    }
}
function toBMIProgram() {
    const Weight = parseFloat(document.getElementById('inputWeight').value)
    const Height = parseFloat(document.getElementById('inputHeight').value)
    toBMI(Weight, Height)
}
function toAgeProgram() {
    const Age = parseFloat(document.getElementById('inputAge').value)
    toAge(Age)
}