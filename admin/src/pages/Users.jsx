import React, { useEffect, useState } from 'react'

const Users = () => {
    const [usersList, setUsersList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)


    const getUserList = async () => {

    }

    useEffect(() => {

    }, [])

    return (
        <div>Users</div>
    )
}

export default Users