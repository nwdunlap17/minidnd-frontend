// grab select character drop down and give it event listener to execute loadCharacter



function displayStats(char) {
    loadCharSheet() //contains clearPage
 
    document.getElementById('char_name_h1').innerText = char.name

    document.getElementById('char_description').innerText = char.description

    document.getElementById('char_photo').setAttribute('src',char.img_url)
    //saves
    document.getElementById('phys_save').innerText += ' +' + char.physical_save
    document.getElementById('phys_save').setAttribute('value',char.physical_save)
    document.getElementById('phys_save').setAttribute('name','Save vs Physical')
    document.getElementById('phys_save').addEventListener('click',rollForSuccess)

    document.getElementById('mag_save').innerText += ' +' + char.magic_save
    document.getElementById('mag_save').setAttribute('value',char.magic_save)
    document.getElementById('mag_save').setAttribute('name','Save vs Magic')
    document.getElementById('mag_save').addEventListener('click',rollForSuccess)

    document.getElementById('initiative').innerText += ' +' + char.initiative
    document.getElementById('initiative').setAttribute('value',char.initiative)
    document.getElementById('initiative').setAttribute('name','Initiative')
    document.getElementById('initiative').addEventListener('click',rollForSuccess)

    //skills
    document.getElementById('athletics').innerText += ' +' + char.athletics
    document.getElementById('athletics').setAttribute('value',char.athletics)
    document.getElementById('athletics').setAttribute('name','Athletics')
    document.getElementById('athletics').addEventListener('click',rollForSuccess)

    document.getElementById('subterfuge').innerText += ' +' + char.subterfuge
    document.getElementById('subterfuge').setAttribute('value',char.subterfuge)
    document.getElementById('subterfuge').setAttribute('name','Subterfuge')
    document.getElementById('subterfuge').addEventListener('click',rollForSuccess)

    document.getElementById('lore').innerText += ' +' + char.lore
    document.getElementById('lore').setAttribute('value',char.lore)
    document.getElementById('lore').setAttribute('name','Lore')
    document.getElementById('lore').addEventListener('click',rollForSuccess)

    //other
    let levelRow = document.getElementById('level')
    let levelSpan = document.createElement('span')
    levelSpan.classList.add('colon')
    levelSpan.textContent = 'Level: '
    levelRow.appendChild(levelSpan)
    let levelNumSpan = document.createElement('span')
    levelNumSpan.textContent = char.level
    levelRow.appendChild(levelNumSpan)
 
    let xpRow = document.getElementById('xp')
    let xpSpan = document.createElement('span')
    xpSpan.classList.add('colon')
    xpSpan.textContent = 'XP: '
    xpRow.appendChild(xpSpan)
    let xpNumSpan = document.createElement('span')
    xpNumSpan.textContent = char.xp
    xpRow.appendChild(xpNumSpan)
 
    let raceRow = document.getElementById('race')
    raceRow.setAttribute('value', char.race.name)
    let raceSpan = document.createElement('span')
    raceSpan.classList.add('colon')
    raceSpan.textContent = 'Race: '
    raceRow.appendChild(raceSpan)
    let raceNumSpan = document.createElement('span')
    raceNumSpan.textContent = char.race.name
    raceRow.appendChild(raceNumSpan)

    let classRow = document.getElementById('class')
    classRow.setAttribute('value', char.class_type.name)
    let classSpan = document.createElement('span')
    classSpan.classList.add('colon')
    classSpan.textContent = 'Class: '
    classRow.appendChild(classSpan)
    let classNumSpan = document.createElement('span')
    classNumSpan.textContent = char.class_type.name
    classRow.appendChild(classNumSpan)
 
    document.getElementById('ac').innerText += ' ' + char.armor_class
    document.getElementById('hp').value = char.hp
    document.getElementById('maxHp').textContent += char.max_hp
    attackBox(char)
    abilitiesBox(char)
    spellsBox(char)

    //edit and delete buttons
    let delBtn = document.getElementById('del-char')
    delBtn.setAttribute('value', char.id)

    let editBtn = document.getElementById('edit-char')
    editBtn.setAttribute('value', char.id)
}

function attackBox(char) {
    let box = document.getElementById('attacks')
    let numAtk = document.createElement('p')
    numAtk.textContent = writeNumAttacks(char)
    box.appendChild(numAtk)
    let weapon = document.createElement('p')

    let atkButton = document.createElement('button')
    atkButton.textContent = "Weapon Attack"
    atkButton.setAttribute('name','Weapon Attack')
    atkButton.setAttribute('value',char.toHit)
    atkButton.setAttribute('damageDie',char.damageDie)
    atkButton.setAttribute('damageMod',0)
    atkButton.classList.add('btn')
    atkButton.classList.add('btn-outline-secondary')
    atkButton.addEventListener('click', event => {rollForAttack(event)})

    weapon.textContent = `${capitalize(char.weapon)} Weapon - AB +${char.toHit} - DMG: 1d${char.damageDie}`
    

    switch(char.weapon){
        case 'finesse':
            break;
        case 'ranged':
            break;
        case 'martial':
            if (char.class_type.name == "Barbarian"){
                weapon.textContent += ' +2'
                atkButton.setAttribute('damageMod',2)
            }
            break;
        case 'large':
            if (char.class_type.name == "Barbarian"){
                weapon.textContent += ' +2'
                atkButton.setAttribute('damageMod',2)
            }
            break;
    }
    if (char.class_type.name == "Paladin"){
        weapon.textContent += ' (+2 against undead)'
    }
    box.appendChild(weapon)
    box.appendChild(atkButton)


}

function writeNumAttacks(char){
    let number = 1
    let text = ''
    if (char.weapon == 'finesse'){
        number++
        if (char.class_type.name == 'Monk'){
            number++
        }
    }
    if (char.class_type.sub_type == 'Warrior'){
        console.log('warrior bonus attacks')
        number += Math.floor((char.level-1)/3)
    }
    
    text = number + ' Attack'
    if (number > 1) {text += 's'}

    if (char.class_type.name == 'Warlock' && char.race.name == 'Dragonborn'){
      text = 'Pick 2: ' + text + ", Eldritch Blast, Breath Attack"
      return text   
    } else{
        if (char.class_type.name == 'Warlock'){text += ' + Eldritch Blast'}
        if (char.race.name == 'Dragonborn'){text += ' + Breath Attack'}
    }
    return text
}

function abilitiesBox(char){
    let abList = document.getElementById('abilities')

    while (abList.firstChild){
        abList.removeChild(abList.firstChild)
    }

    let title = document.createElement('h3')
    title.textContent = 'Abilities'
    abList.appendChild(title)

    let allAbilities = [char.class_type_abilities,char.race_abilities].flat()
    for (let i = 0; i < allAbilities.length; i++){
        let ab = document.createElement('p')
        ab.innerText = allAbilities[i].description
        abList.appendChild(ab)
    }
}

function spellsBox(char){
    if (char.class_type.caster_type == 'none'){
        return
    }   
    let spellBox = document.createElement('div')
    spellBox.setAttribute('id','spellBox')
    spellBox.classList.add('char-box-borders')
    bottom.appendChild(spellBox)
    spellBox.classList.add('bottom-item')
    spellBox.classList.add('horz')
    
    let castBox = document.createElement('div')
    
    let title = document.createElement('h3')
    title.textContent = 'Spells'
    spellBox.appendChild(title)
    
    let slotBar = document.createElement('div')
    castBox.appendChild(slotBar)
    
    let slots = document.createElement('p')
    slots.setAttribute('id','slots')
    if (char.spell_slots > 0){
        slots.textContent = 'Remaining Spell Slots: ' + char.spell_slots
        
    } else{
        slots.textContent = 'No more spell slots'
    }
    castBox.appendChild(slots)
    
    let castBtn = document.createElement('button')
    castBtn.textContent = 'Cast Spell'
    castBtn.setAttribute('id','cast-button')
    castBtn.classList.add('btn-outline-dark')
    castBtn.classList.add('btn')
    castBtn.addEventListener('click',() =>{useSpellSlot(char)})
    castBox.appendChild(castBtn)
    
    if (char.spell_slots == 0){
        castBtn.style.display = 'none'
    } 
    
    let preparedSpells = document.createElement('ul')
    preparedSpells.classList.add('bottom-right')
    for(let spell of char.spells){
        let spellListing = document.createElement('li')
        spellListing.textContent = spell.name +": " + spell.description
        preparedSpells.appendChild(spellListing)
    }
    spellBox.appendChild(castBox)

    let spellsLeft = document.createElement('div')
    // spellsLeft.classList.add('horz')
    // spellsLeft.classList.add('vert')
    spellsLeft.classList.add('bottom-left')
    spellsLeft.appendChild(title)
    spellsLeft.appendChild(castBox)

    spellBox.appendChild(spellsLeft)
    spellBox.appendChild(preparedSpells)
}

