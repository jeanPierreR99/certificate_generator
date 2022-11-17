    function crearPDF() {

        var name = document.getElementById('nombre').value;
        var codigo = document.getElementById('codigo').value;
        
        var doc = new jsPDF();
        var image1 = new Image();
        var image2 = new Image();
        var width = doc.internal.pageSize.getWidth();

        var date = new Date();
        var fecha = date.getDate();
        var mes = date.getMonth();
        var año = date.getFullYear(); 

        //imgen fondo
        image1.src = "./encabe.png";
        doc.addImage(image1, 'JPEG', 33, 90, 140, 140);
        
        image2.src = "./encabe1.png";
        doc.addImage(image2, 'JPEG', 10, 5, 23, 25);
        doc.setFontSize(14);
        doc.setFontType('bold');
        doc.setFont("Arial");
        doc.text('UNIVERSIDAD NACIONAL AMAZONICA DE MADRE DE DIOS', width / 2, 13, { align: 'center' });
        doc.setFontSize(12);
        doc.text('VICERRECTORADO ACADÉMICO', width / 2, 18, { align: 'center' });
        doc.text('DIRECCIÓN DE PROYECION SOCIAL Y EXTENSION CULTURAL', width / 2, 23, { align: 'center' });
        doc.setFontSize(11);
        doc.text('“Año del Fortalecimiento de la Soberanía Nacional”', width / 2, 28, { align: 'center' });
        doc.text('“Madre de Dios Capital de la Biodiversidad del Perú”', width / 2, 33, { align: 'center' });
        doc.line(17, 34, 190, 34, 'F');
        doc.line(17, 34.3, 190, 34.3, 'F');
        doc.setFontSize(14);
        doc.text('CONSTANCIA DPSEC N° 1234-456', 110, 45);
        doc.setFontSize(28);
        doc.setFont("Rockwell Condensed");
        doc.text('CONSTANCIA', width / 2, 65, { align: 'center' });
        doc.setFontSize(16);
        doc.setFontType('none');
        doc.setFont("Arial");
        doc.text('La Dirección de Proyección Social y Extensión Cultural de la Universidad', width / 2, 85, { align: 'center' });
        doc.text('Nacional Amazónica de Madre de Dios, hace constar que el alumno(a):', width / 2, 95, { align: 'center' });
        doc.setFontSize(18);
        doc.setFontType('bold');
        doc.setFont("Rockwell Condensed");
        doc.text(name.toUpperCase(), width / 2, 115, { align: 'center' });
        doc.setFontSize(12);
        doc.setFont("Agency FB");
        doc.text("CÓDIGO ESTUDIANTE: " + codigo, width / 2, 120, { align: 'center' });
        doc.setFontSize(16);
        doc.setFontType('none');
        doc.setFont("Arial");
        doc.text('Ha   participado   en   actividades    de', 40, 140);
        doc.setFontType('bold');
        doc.text('Responsabilidad   Social', 132, 140);
        doc.setFontType('none');
        doc.setFont("Arial");
        doc.text('desarrollado por la Universidad Nacional Amazónica de Madre de Dios a ', 22, 150);
        doc.text('través de la Dirección de Proyección Social y Extensión Cultural.', 22, 160);
        doc.text('Se expide la presente constancia a solicitud del interesado para', 40, 190);
        doc.text('los fines que estime conveniente.', 22, 200);
        doc.setFontSize(14);
        doc.setFontType('bold');
        doc.text(' Puerto Maldonado, ' + fecha + ' de ' + mes + ' ' + año + '', 100, 220);
        doc.line(17, 280, 190, 280, 'F');
        doc.line(17, 280.3, 190, 280.3, 'F');
        doc.setFontSize(10);
        doc.setFont('calibri');
        doc.setFontType('bold');
        doc.text("Ciudad Universitaria Av. jorge Chávez N° 116 - Puerto Maldonado - Madre de Dios " + codigo, width / 2, 285, { align: 'center' });
        console.log(doc.getFontList())
        //save pdf
            doc.save(''+name.toUpperCase()+' - '+codigo+'.pdf');
    }