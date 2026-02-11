
  # CFN Coacalco

  This is a code bundle for CFN Coacalco. The original project is available at https://www.figma.com/design/d92fgsCgUnG8RloQ11zf0k/Redise%C3%B1o-visual-CFN-Coacalco.

  ## Ejecución Local

Para ejecutar el proyecto en tu máquina local:

1.  **Instalar dependencias**:
    Abre tu terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo**:
    Ejecuta el siguiente comando para ver el sitio en tu navegador:
    ```bash
    npm run dev
    ```
    Esto abrirá el sitio en `http://localhost:3000`.

## Despliegue en cPanel (cfn.org.mx)

Para subir tu sitio a cPanel y que sea visible en `cfn.org.mx`:

1.  **Generar la versión de producción**:
    En tu terminal, ejecuta:
    ```bash
    npm run build
    ```
    Esto creará una carpeta llamada `build` con todos los archivos optimizados para la web.

2.  **Preparar los archivos**:
    *   Ve a la carpeta `build` que se acaba de crear.
    *   Selecciona **todos** los archivos dentro de esa carpeta (`index.html`, carpeta `assets`, etc.).
    *   Comprímelos en un archivo `.zip`.

3.  **Subir a cPanel**:
    *   Ingresa a tu cuenta de cPanel.
    *   Abre el **Administrador de Archivos** (File Manager).
    *   Navega a la carpeta `public_html` (o la carpeta raíz de tu dominio `cfn.org.mx`).
    *   Haz clic en **Cargar** (Upload) y sube tu archivo `.zip`.

4.  **Descomprimir**:
    *   Una vez subido, haz clic derecho sobre el archivo `.zip` en el Administrador de Archivos.
    *   Selecciona **Extract** (Extraer).
    *   Asegúrate de que los archivos se extraigan directamente en la carpeta pública (ej. `public_html`).
    *   ¡Listo! Tu sitio debería estar visible en `cfn.org.mx`.
  