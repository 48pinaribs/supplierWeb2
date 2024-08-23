import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Offers } from "../data";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Tab from '../tab/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const OfferList = (props) => {
  const { ID } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [showWaiting, setShowWaiting] = useState(false);
  const [showApproved, setShowApproved] = useState(false);

  const handleFilter = () => {
    const start = startDate ? new Date(startDate) : new Date('1970-01-01');
    const end = endDate ? new Date(endDate) : new Date();

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return;
    }

    const filtered = Offers.filter(item => {
      const itemDate = new Date(item.OfferDate);
      return itemDate >= start && itemDate <= end;
    });

    setFilteredData(filtered);
    setShowWaiting(false);
    setShowApproved(false);
  };

  const handleTabClick = (key) => {
    if (key === 'waiting') {
      setShowWaiting(true);
      setShowApproved(false);
    } else if (key === 'approved') {
      setShowApproved(true);
      setShowWaiting(false);
    } else {
      setShowWaiting(false);
      setShowApproved(false);
    }
  };

  const tabs = [
    { key: 'waiting', label: 'Bekleyen', active: showWaiting },
    { key: 'approved', label: 'Tamamlanan', active: showApproved },
  ];

  const dataToDisplay = showWaiting
    ? Offers.filter(item => item.Status === "Waiting")
    : showApproved
      ? Offers.filter(item => item.Status === "Approved")
      : (filteredData.length > 0 ? filteredData : Offers);

  const ResponsiveTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      borderBottom: '1px solid #e0e0e0',
      whiteSpace: 'nowrap',
    },
    '&:before': {
      content: 'attr(data-label)',
      fontWeight: 'bold',
      display: 'flex',
      width: '100%',
      marginBottom: '4px',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }));

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even) td': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(odd) td': {
      backgroundColor: theme.palette.background.default,
    },
  }));

  return (
    <div>
      <div style={{ marginLeft: '50px', marginTop: '20px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            sx={{
              width: 140,
              '& .MuiInputBase-root': {
                height: 30,
                fontSize: '12px',
                borderColor: 'blue',
              },
              '@media only screen and (max-width: 560px)': {
                height: '18px',
                width: '104px',
              },
            }}
          />
          <DatePicker
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            sx={{
              width: 140,
              marginLeft: '7px',
              '& .MuiInputBase-root': {
                height: 30,
                fontSize: '12px',
                borderColor: 'blue',
              },
              '@media (max-width: 560px)': {
                height: '18px',
                width: '104px',
              },
            }}
          />
        </LocalizationProvider>

        <Button
          variant="contained"
          onClick={() => handleFilter()}
          className="filterbtn"
          style={{ width: '80px', height: '29px' }}
          sx={{
            marginLeft: '9px',
            '@media (max-width: 560px)': {
              width: '23px',
              fontSize: '11px',
            },
            '@media (max-width: 390px)': {
              width: '20px',
              fontSize: '10px',
              height: '25px',
              marginLeft: '75px',
              marginTop: '18px',
            },
          }}
        >
          Filtrele
        </Button>
      </div>

      <div>
        <Tab tabs={tabs} onTabClick={handleTabClick} />
      </div>

      <TableContainer style={{ paddingLeft: '50px', paddingRight: '50px', marginBottom: '70px' }}>
        <Table aria-label="simple table" component={Paper} style={{ overflowX: 'auto' }}>
          {!isMobile && (
            <TableHead>
              <TableRow >
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '50px' }}>ID</ResponsiveTableCell>
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '90px' }}>Şirket Adı</ResponsiveTableCell>
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '60px' }}>Teklif Tarihi</ResponsiveTableCell>
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '100px' }}>Açıklama</ResponsiveTableCell>
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '50px' }}>Durum</ResponsiveTableCell>
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '50px' }}></ResponsiveTableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {dataToDisplay.map((items, index) => (
              <StyledTableRow key={index}>
                <ResponsiveTableCell data-label="ID" style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                  {items.ID} {/* Mobilde Status'u ID'nin yanında göstermek için */}
                  {isMobile && (
                    <span >
                      <label style={{ marginLeft: '10px', fontWeight: 'lighter' }}>|</label><label style={{ marginLeft: '15px', fontWeight: '650', fontSize: '11px' }}>Durum</label><label style={{ marginLeft: '30px' }}>{items.Status}</label>
                    </span>
                  )}
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Şirket Adı" style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                  {items.CompanyName}
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Teklif Tarihi" style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                  {items.OfferDate}
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Açıklama" style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                  {items.Description}
                </ResponsiveTableCell>
                {!isMobile && (
                  <ResponsiveTableCell data-label="Durum" style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                    {items.Status}
                  </ResponsiveTableCell>)}
                <ResponsiveTableCell style={{ padding: '8px', fontSize: '12px', maxWidth: '500px', paddingRight: 'auto' }}>
                  <Link style={{ textDecoration: 'none', color: 'rgb(45, 30, 202)', fontWeight: 'bold' }} to={`/Offer/OfferListDetail/${items.ID}`}>
                    Teklif Detay
                  </Link>
                </ResponsiveTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
