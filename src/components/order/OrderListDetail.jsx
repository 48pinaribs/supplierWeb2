import { useState } from 'react';
import { OrdersDetails } from '../data';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

export const OrderListDetail = () => {
  const { ID } = useParams();

  const handleChange = (e, setState) => {

    setState(e.target.value);
  };

  useEffect(() => {
    const selectedItemdetay = OrdersDetails.find(order => order.ID === parseInt(ID));
    if (selectedItemdetay) {
      setItemdetayId(selectedItemdetay.ID);
      setItemdetayProduct(selectedItemdetay.Product);
      setItemdetayInvoiceAddress(selectedItemdetay.InvoiceAddress);
      setItemdetayDeliveryAddress(selectedItemdetay.DeliveryAddress);
      setItemdetayOrderAmount(selectedItemdetay.OrderAmount);
      setItemdetayDescription(selectedItemdetay.Description);
    }
  }, [ID]);

  const [itemdetayId, setItemdetayId] = useState('');
  const [itemdetayProduct, setItemdetayProduct] = useState('');
  const [itemdetayInvoiceAddress, setItemdetayInvoiceAddress] = useState('');
  const [itemdetayDeliveryAddress, setItemdetayDeliveryAddress] = useState('');
  const [itemdetayOrderAmount, setItemdetayOrderAmount] = useState('');
  const [itemdetayDescription, setItemdetayDescription] = useState('');
  /* 
    const handleChange = (event) => {
      setItemdetayId(event.target.value);
      setItemdetayProduct(event.target.value);
      setItemdetayInvoiceAddress(event.target.value);
      setItemdetayDeliveryAddress(event.target.value);
      setItemdetayOrderAmount(event.target.value);
      setItemdetayDescription(event.target.value);
    };
   */
  const ResponsiveTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none', // Remove bottom border
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none', // Remove bottom border 
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      borderBottom: '1px solid #e0e0e0',
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

  return (
    <Box sx={{ padding: '16px', marginLeft: '30px', marginRight: '30px' }}>
      <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
        <Table aria-label="simple table">
          {!isMobile && (
            <TableHead>
              <TableRow>
                {['ID', 'Ürün', 'Fatura Adresi', 'Teslimat Adresi', 'Sipariş Miktarı', 'Açıklama'].map((heading, index) => (
                  <ResponsiveTableCell key={index} style={{ padding: '8px', fontSize: '12px', maxWidth: '50px' }}>
                    {heading}
                  </ResponsiveTableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {OrdersDetails.filter(order => order.ID === parseInt(ID)).map((itemdetay, index) => (
              <TableRow key={index} style={{ padding: '4px', height: 'auto' }}>
                <ResponsiveTableCell data-label="ID" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayId}
                    onChange={e => setItemdetayId(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Ürün" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayProduct}
                    onChange={e => setItemdetayProduct(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Fatura Adresi" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayInvoiceAddress}
                    onChange={e => setItemdetayInvoiceAddress(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Teslimat Adresi" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayDeliveryAddress}
                    onChange={e => setItemdetayDeliveryAddress(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Sipariş Miktarı" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayOrderAmount}
                    onChange={e => setItemdetayOrderAmount(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
                <ResponsiveTableCell data-label="Açıklama" style={{ padding: '4px', maxWidth: '500px' }}>
                  <TextField
                    value={itemdetayDescription}
                    onChange={e => setItemdetayDescription(e.target.value)}
                    variant='standard'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { fontSize: '12px', padding: '4px' } }}
                    style={{ maxWidth: '200px' }}
                  />
                </ResponsiveTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack backgroundColor='white' sx={{ marginTop: '25px' }}>
        <Button
          variant="contained"
          onClick={() => console.log("ID:", itemdetayId, "Product:", itemdetayProduct, "Quantity:", itemdetayInvoiceAddress, "Price:", itemdetayDeliveryAddress, "Description:", itemdetayDescription)}
          style={{
            backgroundColor: 'blue',
            paddingTop: '4px',
            fontSize: '13px',
            width: '100px',
            height: '30px',
            color: 'white',
            borderRadius: '3px',
            marginLeft: 'auto',
            display: 'block',
            fontSize: isMobile ? '11px' : '13px',
            width: isMobile ? '80px' : '100px',
            height: isMobile ? '25px' : '30px',
            paddingTop: isMobile ? '3px' : '4px',
          }}
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};
