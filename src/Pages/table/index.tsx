import React, { useState, useEffect, useContext } from 'react';
import {
    Grid, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Button, IconButton,
    Container, Typography,
} from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { RenderRow } from './renderRow';
import { filterDataByKey, HeaderSort, Order, StatusType, userOrderByHeader } from 'utils/SortItem';
import { AuthContext } from 'context/auth';
import { useStyles } from './styles/index.styles';
import { SearchOutlined } from '@material-ui/icons';
import AddRowModal, { StateShape } from 'components/AddRow';
import { TableCellHeader } from './tableCellHeader';
import { IStateInput } from 'Pages/Auth/types/suginUp';





const columns: Array<HeaderSort> = ["id", "name", "status", "resources", "price", "provider_name", "provider_imag", "complicity", "start_data", "deadLine", "offers"]


export default function TableBasic() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [action, setAction] = useState<"add" | "update">("add")
    const [updateRow, setupdateRow] = useState<StateShape>()

    const [data, setData] = useState<StateShape[]>([])
    const [order, setOrder] = useState<Order>("asc")


    const fetchProjects = async () => {
        try {
            const isFound = await fetch(`http://localhost:3001/projects`)
            const response = (await isFound.json())
            if (!response.length) {
                setData([])

            }

            setData(response)

        } catch (error) {
            throw new Error(`there  are  some dsssssssss error 🤷‍♀️ ${error}`)

        }


    }






    const handleWithDelateClick = async (id: string) => {
        try {
            setIsOpen(true)
            const isFound = await fetch(`http://localhost:3001/projects/${id}`, {
                method: "DELETE"
            })
            const response = (await isFound.json())
            console.log("test", response)


            setData(response)
            setIsOpen(false)


        } catch (error) {
            throw new Error(`there  are  some  error 🤷‍♀️ ${error}`)

        }


    }







    useEffect(() => {

        fetchProjects()

    }, [])

    const handleAll = async () => await fetchProjects()

    const handleClick = (header: HeaderSort) => {
        const orderType = order === "asc" ? "desc" : "asc"

        const sortData = userOrderByHeader(data, header, orderType)
        console.log("sortData before ", sortData);
        setData(sortData)
        setOrder(orderType)
        console.log("test me");
    }




    const [name, setName] = useState<IStateInput>({
        values: "",
        errors: "",
        label: "serach",
        focus: true,
        touch: true,
        name: "search"
    })



    const handleChangeSerach = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if ((e.target.value).trim().toLowerCase() === " ") {

            setName({
                ...name,
                errors: "you  cant  used  empty  search"
            })
            return
        }
        else {
            setName({
                ...name,
                values: e.target.value,
                errors: ""
            })
        }

    }



    const handleWithSerach = async () => {

        try {
            const isFoundEmail = await fetch(`http://localhost:3001/projects?q=${name.values}`)
            const response = (await isFoundEmail.json())
            console.log("test", response);
            if (!response.length) {
                setData([])

            }

            setData(response)

        } catch (error) {
            throw new Error(`there  are  some  error 1 🤷‍♀️ ${error}`)

        }

    }

    const handleOnBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
        if (e.target.value === "") {
            setName((pre) => ({
                ...pre,
                focus: false
            }))
        } else {

            setName((pre) => ({
                ...pre,
                touch: false
            }))

        }
    }


    const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
        setName({
            ...name,
            focus: true,
            touch: false
        })

    }

    useEffect(() => {

        // fetchProjects()

    }, [data, order])


    const context = useContext(AuthContext)

    const handleME = async () => {

        const id = context.state?.user?.id


        try {
            const isFoundEmail = await fetch(`http://localhost:3001/users/${id}?_embed=projects`)
            const response = (await isFoundEmail.json())
            console.log("test response handleME", response);
            if (!response.projects) {
                setData([])
            }
            setData(response.projects)

        } catch (error) {
            throw new Error(`there  are  some  error 🤷‍♀️ ${error}`)

        }
    }


    const handleWithEditClick = async (data: StateShape) => {
        setIsOpen(!isOpen)

        setAction("update")


        setupdateRow(data)
        // setIsOpenAdd(true)



    }


    const renderButtons = () => {
        return (
            <Container>
                <Grid item container direction="row" md={12} sm={6} className={classes.buttonWrapper}>
                    <Button className={classes.buttonItemWithsDot} variant="outlined" onClick={handleAll}>
                        <div><div className={`${classes.dots} ${classes.gray}`}></div></div>

                        ALL</Button>
                    <Button className={classes.buttonItemWithsDot} variant="outlined" onClick={handleME}>
                        <div><div className={`${classes.dots} ${classes.my}`}></div></div>
                        My</Button>
                    <Button className={classes.buttonItemWithsDot} variant="outlined" onClick={() => handleWithButton("Acquired")}>
                        <div><div className={`${classes.dots} ${classes.acquired}`}></div></div>


                        Acquired</Button>
                    <Button className={classes.buttonItemWithsDot} variant="outlined" onClick={() => handleWithButton("Saved")}>
                        <div><div className={`${classes.dots} ${classes.saved}`}></div></div>

                        Saved</Button>
                </Grid>
            </Container>
        )
    }



    const handleWithAddProject = () => {
        setIsOpen(true)
    }
    const renderTable = () => {
        return (

            <TableContainer className={classes.container + " " + classes.table}>
                <Grid className={classes.wrapperHeaderTitle} item container direction='row' justifyContent='space-between' alignItems='center' spacing={3}>
                    <Grid item md={6}>
                        <Typography variant='h3'>Project </Typography>

                    </Grid>
                    <Grid item md={6} className={classes.wrapperButtonHeader}>
                        <Button className={classes.createProject} onClick={handleWithAddProject}>CREATE PROJECTS</Button>
                    </Grid>
                </Grid>


                <Table stickyHeader aria-label="sticky table" className={classes.table + "" + classes.tableResponsive}>
                    <TableHead className={classes.tableHeadCell}>
                        <TableRow className={classes.tableHeadRow}>

                            {columns.map((x) =>
                                <TableCellHeader name={x} onClick={() => handleClick(x)} />
                            )}
                            <TableCell className={classes.tableHeadCell} align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBodyRow}>
                        {data.length && data.map((x, index) =>
                            <RenderRow data={x} key={x.id}
                                handleWithDelateClick={() => handleWithDelateClick(x.id)}
                                handleWithEditClick={() => handleWithEditClick(x)} />
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
        )
    }



    const RenderLeft = () => {
        return (
            <Grid item container direction='row' justifyContent='space-between' alignItems='center' spacing={3}>
                <Grid item md={8}>
                    <TextField
                        error={Boolean((name.errors).length > 1 && name.touch && name.focus)}
                        type={""}
                        name={name.name}
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                        onChange={handleChangeSerach}
                        className={classes.seachText}
                        defaultValue="Search  by name"
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <IconButton>
                                    <SearchOutlined />
                                </IconButton>
                            ),
                        }}
                    />
                </Grid>
                <Grid item md={4}>
                    <Button className={classes.searchWrapper} variant="outlined" onClick={handleWithSerach}>Search</Button>

                </Grid>

            </Grid>

        )
    }


    const handleWithButton = (key: StatusType, userId?: string) => {
        let filterData
        if (!userId) {
            filterData = filterDataByKey(data, key)
            setData(filterData)
            console.log("testdss", data);
            return;
        }
        filterData = filterDataByKey(data, key, userId)
        setData(filterData)
        return;
    }
    return (
        <Grid container className={classes.root}>
            <Grid item container direction='column' className={classes.SerachWithButton}>
                <Grid item container direction="row">
                    <Grid item md={4}>
                        {RenderLeft()}
                    </Grid>

                    <Grid item md={8} direction="row">
                        {renderButtons()}
                    </Grid>

                </Grid>


            </Grid>

            <Grid>
                {isOpen && <AddRowModal isOpen={isOpen} setIsOpen={setIsOpen} action={action} data={action === "update" ? updateRow : undefined} />}
            </Grid>
            {renderTable()}
        </Grid>

    );
}


