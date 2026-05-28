import { supabase } from './supabase.js'

const roleBtns = document.querySelectorAll('.role-btn')
roleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        roleBtns.forEach(b => b.classList.remove('active'))
        this.classList.add('active')
    })
})

const danBtns = document.querySelectorAll('.dan-button')
danBtns.forEach(btn => {
    btn.addEventListener('click', async function() {
        const activeRole = document.querySelector('.role-btn.active')
        if (activeRole) {
            const role = activeRole.textContent === 'Жолооч' ? 'driver' : 'employer'
            const full_name = document.getElementById('full_name')?.value || ''
            const phone = document.getElementById('phone')?.value || ''
            const { data, error } = await supabase
                .from('users')
                .insert([{ user_role: role, verified: false, full_name: full_name, phone: phone }])
            if (error) {
                alert('Алдаа: ' + error.message)
            } else {
                alert('Бүртгэл амжилттай!')
                window.location.href = 'profile.html'
            }
        } else {
            alert('Жолооч эсвэл Ажил олгогч сонгоно уу!')
        }
    })
})