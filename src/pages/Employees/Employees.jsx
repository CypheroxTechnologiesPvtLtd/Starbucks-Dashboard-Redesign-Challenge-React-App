import React from 'react'
import Employee from '../../components/Employee/Employee'
import employee_data from '../../assets/Json_data/employee.json'
import { Grid } from '@nextui-org/react'
const Employees = () => {
    return (
        <div>
            <Grid.Container gap={2} justify="center">
                {
                    employee_data?.map((item, index) => (
                        <Grid xs={4}>
                            <Employee
                                img={item.profile_image}
                                name={item.employee_name}
                                age={item.employee_age}
                                role={item.role}
                                salary={item.employee_salary}
                                key={index}
                            />
                        </Grid>
                    ))
                }
            </Grid.Container>

        </div>
    )
}

export default Employees