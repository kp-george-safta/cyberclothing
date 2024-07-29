import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MenuIcon from "@mui/icons-material/Menu";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { idID } from "@mui/material/locale";
import Modal from "@mui/material/Modal";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const inter = Inter({ subsets: ["latin"] });
//  Task 1: Create Produts Tabel
//  https://react.pixelstrap.com/multikart-admin/products/physical/sub-category
//  https://mui.com/material-ui/react-table/ use MUI
//  Add button, https://mui.com/material-ui/react-dialog that opens a dialog upon onClikcEvent

const drawerWidth = 240;

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const renderDetailsButton = (params: any) => {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{}}
          onClick={() => {
            handleEdit(params.row);
          }}
        >
          <EditIcon />
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            handleDelete(params.row.id);
          }}
        >
          <DeleteIcon />
        </Button>
      </div>
    );
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Nr. Produs",
      width: 90,
      headerClassName: "header-name",
      headerAlign: "center"
    },
    { field: "productName", headerName: "Product name", width: 120 , headerAlign: "center", align: "center",},
    { field: "pret", headerName: "Pret", type: "number", width: 120,headerAlign: "center", align: "center", },
    {
      field: "status",
      headerName: "Status",
      width: 160,headerAlign: "center", align: "center",
    },
    { field: "categorie", headerName: "Categorie", width: 130,headerAlign: "center", align: "center", },
    {
      field: "action",
      headerName: "Action",
      width: 140,headerAlign: "center", align: "center",
      renderCell: renderDetailsButton,
    },
  ];

  const handleReload = () => {
    window.location.reload();
  };

  const [rows, setRows] = useState([]);
  const db = require("../../db.json");
  const products = db.products;

  useEffect(() => {
    setRows(products);
  }, []);
  const [openModal, setOpenState] = useState(false);
  const handleOpen = () => setOpenState(true);
  const handleClose = () => setOpenState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [newRow, setNewRow] = useState({
    id: 0,
    pret: "",
    productName: "",
    status: "",
    categorie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow({
      ...newRow,
      [name]: value,
    });
  };

  function handleSubmit() {
    const arrayOfObjects = [...rows];
    if (newRow.id > 0) {
      for (let i = 0; i < arrayOfObjects.length; i++) {
        if (newRow.id === arrayOfObjects[i].id) {
          arrayOfObjects[i] = { ...newRow };
        }
      }
      setRows(arrayOfObjects);
      handleClose();
    } else {
      const products = [...rows, { ...newRow, id: rows.length + 1 }];
      setRows(products);
      console.log(products);
      handleClose();
      setNewRow({
        id: 0,
        pret: "",
        productName: "",
        status: "",
        categorie: "",
      });
    }
  }

  const handleReset = () => {
    setRows([]);
  };


  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };


  const handleEdit = (row) => {
    console.log(row);
    setNewRow({
      id: row.id,
      pret: row.pret,
      productName: row.productName,
      status: row.status,
      categorie: row.categorie,
    });
    handleOpen();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [stock, setStock] = React.useState("");

  const handleChangee = (event: SelectChangeEvent) => {
    setStock(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
          <div className="pozaAvatarDr">
            <Image
              className="pozaAvatar"
              alt="aaa"
              src={`http://localhost:3000/avatar2-removebg.png`}
              width={50}
              height={50}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="alignImg">
            <Image
              onClick={handleReload}
              className="logo"
              alt="aaa"
              src={`http://localhost:3000/logo-removebg-preview.png`}
              width={175}
              height={120}
            />
            <Image
              className="pozaAvatarDrawer"
              alt="aaa"
              src={`http://localhost:3000/avatar2-removebg.png`}
              width={70}
              height={70}
            />
            <p className="textPtNume">Miki</p>
            <p className="textNrml"> GENERAL MANAGER </p>
          </div>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : null}
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Products", "Sales", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text === "Sales" ? (
                    <AttachMoneyIcon />
                  ) : index % 2 === 0 ? (
                    <HomeIcon />
                  ) : (
                    <ProductionQuantityLimitsIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {["Coupons", "Reports", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text === "Settings" ? (
                    <SettingsIcon />
                  ) : index % 2 === 0 ? (
                    <LoyaltyIcon />
                  ) : (
                    <QueryStatsIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box className="tableStyle" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div style={{ height: 400, width: "80%" }}>
          <div className="buton-pozitie">
            <button
              className="button-5"
              role="button"
              onClick={() => handleOpen()}
            >
              Add New Item
            </button>
            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleModal}>
                <div className="popup">
                  <div className="popup-inner">
                    <h2>Enter New Product Details</h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      <label className="">
                        Product Name:
                        <input
                          type="text"
                          name="productName"
                          value={newRow.productName}
                          onChange={handleChange}
                          required
                          style={{
                            padding: " 4px 20px",
                            border: "1px solid black",
                            borderRadius: "20px",
                          }}
                        />
                      </label>
                      <label>
                        Product Price:
                        <input
                          type="text"
                          name="pret"
                          value={newRow.pret}
                          onChange={handleChange}
                          required
                          style={{
                            padding: " 4px 20px",
                            border: "1px solid black",
                            borderRadius: "20px",
                          }}
                        />
                      </label>

                      <InputLabel id="demo-simple-select-label">
                        Status of Stock:
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={stock}
                        label="Age"
                        onChange={handleChangee}
                      >
                        <MenuItem value={10}>On Stock</MenuItem>
                        <MenuItem value={20}>Low on Stock</MenuItem>
                        <MenuItem value={30}>Out of Stock</MenuItem>
                      </Select>
                      <label>
                        Category:
                        <input
                          className="mai-la-dr"
                          type="text"
                          name="categorie"
                          value={newRow.categorie}
                          onChange={handleChange}
                          required
                          style={{
                            padding: " 4px 20px",
                            border: "1px solid black",
                            borderRadius: "20px",
                          }}
                        />
                      </label>
                      <div className="asezareBtn">
                        <button
                          className="button-3"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Add
                        </button>
                        <button
                          className="button-4"
                          type="button"
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Box>
            </Modal>
            <button onClick={handleReset} className="button-5">
              Reset
            </button>
            <button className="button-5" onClick={handleOpen}>
              Edit
            </button>
          </div>
          <DataGrid
            rows={rows}
            checkboxSelection={false}
            columns={columns}
            style={{ height: 700 }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </Box>
    </Box>
  );
}
