function clearPage() {
    let page = document.getElementById('page')
    while (page.firstChild){
        page.removeChild(page.firstChild)
    } 
    return page
}

function loadLogIn(){
    clearPage()
    let page = document.getElementById('page')

    let div = document.createElement('div')
    div.setAttribute('id', 'login')
    page.appendChild(div)

    let field = document.createElement('input')
    field.setAttribute('id', 'loginName')
    field.placeholder = 'Username'
    div.appendChild(field)

    let btn = document.createElement('button')
    btn.setAttribute('id', 'submitLogin')
    btn.addEventListener('click',makeUN)
    btn.innerText = 'Submit'
    div.appendChild(btn)
}

//Character Creation
function loadCharCreator() {   
    clearPage() 
    let page = document.getElementById('page')
    let div = document.createElement('div')
    div.classList.add('vert')
    div.setAttribute('id', 'createCharacter')
    let charForm = document.createElement('div')
    charForm.setAttribute('id', 'charForm')
    charForm.classList.add('vert')
    page.appendChild(div)
    
    let title =  document.createElement('h1')
    title.innerText = 'Create Character'
    div.appendChild(title)

    
    let name = document.createElement('input')
    name.setAttribute('placeholder', 'Character Name')
    // name.defaultValue = randomName()
    name.setAttribute('type', 'text')
    name.setAttribute('id', 'name-field')
    name.classList.add('form-control')
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('form-group')
    let nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name-field')
    nameLabel.textContent = 'Name:'
    nameDiv.appendChild(nameLabel)
    nameDiv.appendChild(name)

    let charDescrip = document.createElement('textarea')
    charDescrip.setAttribute('placeholder', 'A brave (or stupid) adventurer!')
    charDescrip.defaultValue = 'A brave (or stupid) adventurer!'
    charDescrip.setAttribute('type', 'textarea')
    charDescrip.setAttribute('id', 'charDescrip')
    charDescrip.classList.add('form-control')
    let descripDiv = document.createElement('div')
    descripDiv.classList.add('form-group')
    let descripLabel = document.createElement('label')
    descripLabel.setAttribute('for', 'charDescrip')
    descripLabel.textContent = 'Description:'
    descripDiv.appendChild(descripLabel)
    descripDiv.appendChild(charDescrip)
    
    let raceMenu = document.createElement('select')
    raceMenu.onchange = event => {
        showInfo(raceMenu, classMenu)
    }
    raceMenu.setAttribute('id', 'selectRace')
    raceMenu.classList.add('form-control')
    let raceMenuDiv = document.createElement('div')
    raceMenuDiv.classList.add('form-group','form-group-with-descriptor')
    let raceLabel = document.createElement('label')
    raceLabel.setAttribute('for', 'selectRace')
    raceLabel.textContent = 'Select a Race:'
    raceMenuDiv.appendChild(raceLabel)
    raceMenuDiv.appendChild(raceMenu)
    //display race attributes
    let raceDescription = document.createElement('ul')
    raceDescription.classList.add('char-box-borders', 'no-list-style')
    raceDescription.setAttribute('id','race-descriptor')
    raceMenu.addEventListener('change',event => {displayRaceAbilities(event.target)})
    raceMenuDiv.appendChild(raceDescription)
    
    
    let classMenu = document.createElement('select')
    classMenu.setAttribute('id', 'selectClass')
    classMenu.classList.add('form-control')
    let classMenuDiv = document.createElement('div')
    classMenuDiv.classList.add('form-group','form-group-with-descriptor')
    let classLabel = document.createElement('label')
    classLabel.setAttribute('for', 'selectClass')
    classLabel.textContent = 'Select a Class:'
    classMenuDiv.appendChild(classLabel)
    classMenuDiv.appendChild(classMenu)
    //display class attributes
    let classDescription = document.createElement('ul')
    classDescription.classList.add('char-box-borders', 'no-list-style')
    classDescription.setAttribute('id','class-descriptor')
    classMenu.addEventListener('change',event => {displayClassAbilities(event.target)})
    classMenuDiv.appendChild(classDescription)
    
    let weaponMenu = document.createElement('select')
    weaponMenu.setAttribute('id', 'selectWeapon')
    weaponMenu.classList.add('form-control')
    let weaponMenuDiv = document.createElement('div')
    weaponMenuDiv.classList.add('form-group')
    let weaponLabel = document.createElement('label')
    weaponLabel.setAttribute('for', 'selectWeapon')
    weaponLabel.textContent = 'Select a Weapon:'
    weaponMenuDiv.appendChild(weaponLabel)
    weaponMenuDiv.appendChild(weaponMenu)
    
    let finesse = document.createElement('option')
    finesse.setAttribute('value', 'finesse')
    finesse.setAttribute('id', 'finesse')
    finesse.textContent = 'Finesse Weapon - d4, attack twice'
    weaponMenu.appendChild(finesse)
    
    let martial = document.createElement('option')
    martial.setAttribute('value', 'martial')
    martial.setAttribute('id', 'martial')
    martial.textContent = 'Martial Weapon - d8, paired with shield'
    weaponMenu.appendChild(martial)
    
    let large = document.createElement('option')
    large.setAttribute('value', 'large')
    large.setAttribute('id', 'large')
    large.textContent = 'Large Weapon - d12, two handed'
    weaponMenu.appendChild(large)
    
    let ranged = document.createElement('option')
    ranged.setAttribute('value', 'ranged')
    ranged.setAttribute('id', 'ranged')
    ranged.textContent = 'Ranged Weapon - d6'
    weaponMenu.appendChild(ranged)
    
    let armorMenu = document.createElement('select')
    armorMenu.setAttribute('id', 'selectArmor')
    armorMenu.classList.add('form-control')
    let armorMenuDiv = document.createElement('div')
    armorMenuDiv.classList.add('form-group')
    let armorLabel = document.createElement('label')
    armorLabel.setAttribute('for', 'selectArmor')
    armorLabel.textContent = 'Select Armor:'
    armorMenuDiv.appendChild(armorLabel)
    armorMenuDiv.appendChild(armorMenu)
    
    let light = document.createElement('option')
    light.setAttribute('value', 'light')
    light.setAttribute('id', 'light')
    light.textContent = 'Leather - AC 12 - MV 8'
    armorMenu.appendChild(light)
    
    let medium = document.createElement('option')
    medium.setAttribute('value', 'medium')
    medium.setAttribute('id', 'medium')
    medium.textContent = 'Chain - AC 14 - MV 6'
    armorMenu.appendChild(medium)
    
    let heavy = document.createElement('option')
    heavy.setAttribute('value', 'heavy')
    heavy.setAttribute('id', 'heavy')
    heavy.textContent = 'Plate - AC 16 - MV 4'
    armorMenu.appendChild(heavy)

    let pic = document.createElement('input')
    pic.setAttribute('placeholder', 'https://img.url')
    pic.setAttribute('type', 'text')
    pic.setAttribute('id', 'pic-field')
    pic.classList.add('form-control')
    let picDiv = document.createElement('div')
    picDiv.classList.add('form-group')
    let picLabel = document.createElement('label')
    picLabel.setAttribute('for', 'pic-field')
    picLabel.textContent = 'Upload a Picture:'
    picDiv.appendChild(picLabel)
    picDiv.appendChild(pic)

    let randBtn = document.createElement('button')
    randBtn.setAttribute('id', 'rand-char-btn')
    randBtn.classList.add('btn')
    randBtn.classList.add('btn-outline-secondary')
    randBtn.onclick = randomCharacter
    randBtn.textContent = 'Random Character'
    
    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('id', 'submitNewCharacter')
    submitBtn.classList.add('btn')
    submitBtn.classList.add('btn-outline-success')
    submitBtn.onclick = event => submitNewCharacter(event)
    submitBtn.textContent = 'Create Character'

    
    charForm.appendChild(nameDiv)
    charForm.appendChild(descripDiv)
    charForm.appendChild(raceMenuDiv)
    charForm.appendChild(classMenuDiv)
    charForm.appendChild(armorMenuDiv)
    charForm.appendChild(weaponMenuDiv)
    charForm.appendChild(picDiv)
    charForm.appendChild(randBtn)
    charForm.appendChild(submitBtn)
    div.appendChild(charForm)
    loadRaces()
    loadClasses()
}

function loadRaces(){
    let raceList = document.getElementById("selectRace")
    fetch(BASE_URL+'/races')
    .then(response => response.json())
    .then(races => {
        for(let race of races){
            let option = document.createElement('option')
            option.setAttribute('value',race.id)
            option.setAttribute('id',race.name)

            option.setAttribute('numabilities',race.race_abilities.length)

            for(let i = 0; i < race.race_abilities.length; i++){
                let attribute = 'ability' + i
                option.setAttribute(attribute,race.race_abilities[i].description)
            }

            option.textContent = race.name
            raceList.appendChild(option)
        }

        displayRaceAbilities(raceList) //display abilities of default race
    })
}

function loadClasses(){
    let classList = document.getElementById("selectClass")
    fetch(BASE_URL+'/class_types')
    .then(response => response.json())
    .then(classes => {
        for(let class_type of classes){
            let option = document.createElement('option')
            option.setAttribute('value',class_type.id)
            option.setAttribute('id',class_type.name)


            option.setAttribute('numabilities',class_type.class_type_abilities.length)

            for(let i = 0; i < class_type.class_type_abilities.length; i++){
                let attribute = 'ability' + i
                option.setAttribute(attribute,class_type.class_type_abilities[i].description)
            }

            option.textContent = class_type.name
            classList.appendChild(option)
        }

        displayClassAbilities(classList) //display abilities of default class
    })
}

function loadCharSheet() {
    clearPage()
    let sheet = document.createElement('div')
    sheet.setAttribute('id', 'charSheet')
    let page = document.getElementById('page')
    page.appendChild(sheet)
    sheet.classList.add('vert')

    // let charHeader = document.createElement('div')
    // charHeader.setAttribute('id', 'char-header')
    // charHeader.classList.add('horz')
    // let charBody = document.createElement('div')
    // charBody.setAttribute('id', 'char-body')
    // charBody.classList.add('vert')
    // sheet.appendChild(charHeader)
    // sheet.appendChild(charBody)

    let charName = document.createElement('div')
    charName.setAttribute('id', 'char_name')
    // charName.classList.add('center')
    // charName.classList.add('char-box-borders')
    // charName.classList.add('top-item')
    let charNameH1 = document.createElement('h1')
    charNameH1.setAttribute('id', 'char_name_h1')
    charName.appendChild(charNameH1)
    sheet.appendChild(charName)

    let top = document.createElement('div')
    top.setAttribute('id', 'top')
    top.classList.add('horz')
    let bottom = document.createElement('div')
    bottom.setAttribute('id', 'bottom')
    bottom.classList.add('vert')
    // bottom.classList.add('char-box-borders')
    // bottom.classList.add('horz')
    sheet.appendChild(top)
    sheet.appendChild(bottom)

    let charBodyLeft = document.createElement('div')
    charBodyLeft.setAttribute('id', 'char-body-left')
    charBodyLeft.classList.add('top-item')

    let charBodyCenter = document.createElement('div')
    charBodyCenter.setAttribute('id', 'char-body-center')
    charBodyCenter.classList.add('char-box-borders')
    charBodyCenter.classList.add('top-item')
    charBodyCenter.classList.add('center')

    let charBodyRight = document.createElement('div')
    charBodyRight.setAttribute('id', 'char-body-right')
    charBodyRight.classList.add('top-item')
    top.appendChild(charBodyLeft)
    top.appendChild(charBodyCenter)
    top.appendChild(charBodyRight)

    // Char Header
    // let nameLevelSpan = document.createElement('span')
    // nameLevelSpan.setAttribute('id', 'nameLevelSpan')
    // nameLevelSpan.classList.add('vert')
    // nameLevelSpan.classList.add('vert-small')
    // charHeader.appendChild(nameLevelSpan)

    let charLevelDiv = document.createElement('div')
    charLevelDiv.setAttribute('id', 'level-div')
    charLevelDiv.classList.add('char-box-borders')
    // charLevelDiv.classList.add('top-item')

    let levelDiv = document.createElement('div')
    levelDiv.setAttribute('id', 'level')
    charLevelDiv.appendChild(levelDiv)

    charLevelDiv.classList.add('saves-n-skills')
    charBodyLeft.appendChild(charLevelDiv)


    let xpDiv = document.createElement('div')
    xpDiv.setAttribute('id', 'xp')
    charLevelDiv.appendChild(xpDiv)



    
    let classRaceSpan = document.createElement('div')
    classRaceSpan.setAttribute('id', 'class-race-xp')
    classRaceSpan.classList.add('vert')
    // classRaceSpan.classList.add('top-item')
    // classRaceSpan.classList.add('vert-small')
    classRaceSpan.classList.add('char-box-borders')
    classRaceSpan.classList.add('saves-n-skills')

    charBodyRight.appendChild(classRaceSpan)

    let classSpan = document.createElement('div')
    classSpan.setAttribute('id', 'class')
    classRaceSpan.appendChild(classSpan)

    let raceSpan = document.createElement('span')
    raceSpan.setAttribute('id', 'race')
    classRaceSpan.appendChild(raceSpan)

    //Char Body Left
    let saveSpan = document.createElement('span')
    saveSpan.setAttribute('id', 'saves')
    saveSpan.classList.add('vert')
    saveSpan.classList.add('saves-n-skills')
    saveSpan.classList.add('char-box-borders')
    // saveSpan.classList.add('vert-sidebar')
    charBodyLeft.appendChild(saveSpan)

    let h3Saves = document.createElement('h3')
    h3Saves.innerText = 'Saves'
    h3Saves.setAttribute('id', 'h3-skills')
    saveSpan.appendChild(h3Saves)


    let saveBtns = document.createElement('div')
    saveBtns.classList.add('sBtns')
    saveBtns.setAttribute('id', 'save-btns')
    saveSpan.appendChild(saveBtns)

    let phys = document.createElement('button')
    phys.classList.add('skillBox')
    phys.classList.add('btn')
    phys.classList.add('btn-outline-dark')
    phys.classList.add('btn-sm')
    phys.classList.add('s-btn')
    phys.setAttribute('id', 'phys_save')
    phys.textContent = 'Physical:  '
    saveBtns.appendChild(phys)

    let mag = document.createElement('button')
    mag.classList.add('skillBox')
    mag.classList.add('btn')
    mag.classList.add('btn-outline-dark')
    mag.classList.add('s-btn')
    mag.classList.add('btn-sm')
    mag.setAttribute('id', 'mag_save')
    mag.textContent = 'Magical:  '
    saveBtns.appendChild(mag)

    let init = document.createElement('button')
    init.classList.add('skillBox')
    init.classList.add('btn')
    init.classList.add('btn-outline-dark')
    init.classList.add('btn-sm')
    init.classList.add('s-btn')
    init.setAttribute('id', 'initiative')
    init.textContent = 'Initiative:  '
    saveBtns.appendChild(init)


    // Char Body Center

    let img = document.createElement('img')
    img.setAttribute('src', '')
    img.setAttribute('id', 'char_photo')
    charBodyCenter.appendChild(img)

    let charDescrip = document.createElement('p')
    charDescrip.setAttribute('id', 'char_description')
    charDescrip.classList.add('scrollable')
    charBodyCenter.appendChild(charDescrip)

    let hpSpan = document.createElement('span')
    hpSpan.setAttribute('id', 'hp-span')
    charBodyCenter.appendChild(hpSpan)

    let hpTitle = document.createElement('h4')
    hpTitle.classList.add('hp-item')
    hpTitle.textContent = `HP: `
    hpSpan.appendChild(hpTitle)

    let hpCurrent = document.createElement('input')
    hpCurrent.classList.add('hp-item')
    hpCurrent.setAttribute('id', 'hp')
    hpCurrent.setAttribute('type','number')
    hpCurrent.setAttribute('value',3)
    hpCurrent.addEventListener('change',updateHP)
    hpSpan.appendChild(hpCurrent)

    let hpMax = document.createElement('h4')
    hpMax.setAttribute('id','maxHp')
    hpMax.classList.add('hp-item')
    hpMax.textContent = `/ `
    hpSpan.appendChild(hpMax)

    let acBox = document.createElement('div')
    acBox.setAttribute('id', 'ac-box')
    charBodyCenter.appendChild(acBox)
    
    let ac = document.createElement('h4')
    ac.setAttribute('id', 'ac')
    ac.textContent = `AC: `
    acBox.appendChild(ac)


    // Char Body Right

    let skillSpan = document.createElement('span')
    skillSpan.setAttribute('id', 'skills')
    skillSpan.classList.add('vert')
    skillSpan.classList.add('saves-n-skills')
    skillSpan.classList.add('char-box-borders')
    // skillSpan.classList.add('vert-sidebar')
    charBodyRight.appendChild(skillSpan)

    let h3Skills = document.createElement('h3')
    h3Skills.setAttribute('id', 'h3-skills')
    h3Skills.innerText = 'Skills'
    skillSpan.appendChild(h3Skills)

    let skillBtns = document.createElement('div')
    skillBtns.classList.add('sBtns')
    skillBtns.setAttribute('id', 'skill-btns')
    skillSpan.appendChild(skillBtns)

    let ath = document.createElement('button')
    ath.classList.add('skillBox')
    ath.classList.add('btn')
    ath.classList.add('btn-outline-dark')
    ath.classList.add('btn-sm')
    ath.classList.add('s-btn')
    ath.setAttribute('id', 'athletics')
    ath.textContent = 'Athletics:  '
    skillBtns.appendChild(ath)

    let sub = document.createElement('button')
    sub.classList.add('skillBox')
    sub.classList.add('btn')
    sub.classList.add('btn-outline-dark')
    sub.classList.add('btn-sm')
    sub.classList.add('s-btn')
    sub.setAttribute('id', 'subterfuge')
    sub.textContent = 'Subterfuge:  '
    skillBtns.appendChild(sub)

    let lor = document.createElement('button')
    lor.classList.add('skillBox')
    lor.classList.add('btn')
    lor.classList.add('btn-outline-dark')
    lor.classList.add('btn-sm')
    lor.classList.add('s-btn')
    lor.setAttribute('id', 'lore')
    lor.textContent = 'Lore:  '
    skillBtns.appendChild(lor)


    // Bottom
    let weaponAbilitiesBox = document.createElement('div')
    weaponAbilitiesBox.setAttribute('id','weapons-and-abilities')
    weaponAbilitiesBox.classList.add('horz')
    weaponAbilitiesBox.classList.add('bottom-item')
    bottom.appendChild(weaponAbilitiesBox)

    let weaponBox = document.createElement('div')
    weaponBox.classList.add('char-box-borders')
    weaponBox.classList.add('bottom-left')
    weaponAbilitiesBox.appendChild(weaponBox)

    let weaponTitle = document.createElement('h3')
    weaponTitle.textContent = "Attacks"
    weaponBox.appendChild(weaponTitle)

    let attacks = document.createElement('div')
    attacks.setAttribute('id', 'attacks')
    weaponBox.appendChild(attacks)

    let inventory = document.createElement('div')
    inventory.setAttribute('id', 'inventory')
    bottom.appendChild(inventory)

    let abilities = document.createElement('div')
    abilities.setAttribute('id', 'abilities')
    abilities.classList.add('char-box-borders')
    abilities.classList.add('bottom-right')
    weaponAbilitiesBox.appendChild(abilities)

    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('id', 'btnDiv')
    btnDiv.classList.add('horz')
    btnDiv.classList.add('char-box-borders')
    sheet.appendChild(btnDiv)

    let restBtn = document.createElement('button')
    restBtn.classList.add('btn')
    restBtn.classList.add('btn-outline-secondary')
    restBtn.classList.add('btn-sm')
    restBtn.setAttribute('id', 'rest-btn')
    restBtn.onclick = event => showModal(event)
    restBtn.setAttribute('data-target','#restModal')
    restBtn.innerText = 'Return to Town'
    btnDiv.appendChild(restBtn)
 
    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', 'edit-char')
    editBtn.classList.add('btn')
    editBtn.classList.add('btn-outline-secondary')
    editBtn.classList.add('btn-sm')
    editBtn.textContent = 'Edit Character'
    editBtn.onclick = event => editChar(event)
    btnDiv.appendChild(editBtn)

    let delBtn = document.createElement('button')
    delBtn.setAttribute('id', 'del-char')
    delBtn.classList.add('btn')
    delBtn.classList.add('btn-outline-danger')
    delBtn.classList.add('btn-sm')
    delBtn.textContent = 'Delete Character'
    delBtn.onclick = event => confirmDelete(event)
    btnDiv.appendChild(delBtn)
}

function showModal(event) {
    let restBtn = document.getElementById('rest-btn')
    restBtn.setAttribute('data-toggle','modal')

    let isWiz = document.getElementById('class').getAttribute('value')

    if (isWiz != 'Wizard'){
        let wizConfirm = document.getElementById('wiz')
        wizConfirm.style.display = 'none'
    } else {
        let wizConfirm = document.getElementById('wiz')
        wizConfirm.style.display = 'flex'
        wizConfirm.defaultValue = 'yes'
    }

    let confirmRestBtn = document.getElementById('confirm-rest-button')
    confirmRestBtn.addEventListener('click', returnToTown)

}

function displayRaceAbilities(menu){
    let index = menu.selectedIndex
    let selected = menu.children[index]
    let num = selected.getAttribute('numAbilities')
    let display = document.getElementById('race-descriptor')
    while (display.firstChild){ display.removeChild(display.firstChild)}
    for(let i = 0; i < num; i++){
        let attribute = 'ability' + i
        let li = document.createElement('li')
        li.textContent = selected.getAttribute(attribute)
        display.appendChild(li)
    }
}

function displayClassAbilities(menu){
    let index = menu.selectedIndex
    let selected = menu.children[index]
    let num = selected.getAttribute('numAbilities')
    let display = document.getElementById('class-descriptor')
    while (display.firstChild){ display.removeChild(display.firstChild)}
    for(let i = 0; i < num; i++){
        let attribute = 'ability' + i
        let li = document.createElement('li')
        li.textContent = selected.getAttribute(attribute)
        display.appendChild(li)
    }
}


