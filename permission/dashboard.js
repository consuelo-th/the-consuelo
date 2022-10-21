const { ROLE } = require('../data')

function canViewDashboard(user, project) {
    return (user.role === ROLE.ADMIN || user.id === project.userId)
}

function scopedProject(user, projects) {
    if (user.role === ROLE.ADMIN) {
        return res.json(projects)
    }

    return projects.filter(project => user.id === project.userId)
}

module.exports = {
    canViewDashboard,
    scopedProject
}