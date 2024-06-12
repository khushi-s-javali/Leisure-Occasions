<?php
session_start();
require_once('tcpdf/tcpdf.php'); // Include TCPDF library

// Retrieve payment details from POST data
$uniqueId = $_POST['uniqueId'];
$policyid = $_POST['policyid'];
$td = $_POST['td'];
$tm = $_POST['tm'];
$ta = $_POST['ta'];
$tp = $_POST['tp'];

// Generate PDF receipt
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Your Name');
$pdf->SetTitle('Payment Receipt');
$pdf->SetSubject('Payment Receipt');
$pdf->SetKeywords('Receipt, Payment');

$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);

$pdf->AddPage();

// Add content to the PDF
$content = '
    <h2>Payment Receipt</h2>
    <p><label>Transaction ID:</label> ' . $uniqueId . '</p>
    <p><label>Policy ID:</label> ' . $policyid . '</p>
    <p><label>Transaction Date:</label> ' . $td . '</p>
    <p><label>Transaction Mode:</label> ' . $tm . '</p>
    <p><label>Transaction Amount:</label> Rs ' . $ta . '</p>
    <p><label>Time Period:</label> ' . $tp . '</p>
';

$pdf->writeHTML($content, true, false, true, false, '');

// Output the PDF as a download
$pdf->Output('payment_receipt.pdf', 'D');
?>
