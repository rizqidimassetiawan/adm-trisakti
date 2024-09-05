(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-postgraduate-participant-postgraduate-participant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/postgraduate-participant/postgraduate-participant.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/postgraduate-participant/postgraduate-participant.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper row bg-color\">\n  <div class=\"container\">\n    <br>\n    <h2>Data Peserta</h2>\n    <br>\n    <div class=\"table-responsive pb-1\">\n      <table *ngIf=\"dataPostGraduateSpecialization?.length != 0\" style=\"background: #fff\" class=\"table table-striped\">\n        <tbody *ngFor=\"let datasp of dataPostGraduateSpecialization; let i = index;\">\n          <tr class=\"header-tab\">\n            <th class=\"th-colors\" colspan=\"3\">Program yang diminati {{ i+1 }}</th>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Program Penyelenggaraan</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ datasp.class_type ? datasp.class_type : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Program Studi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ datasp.program_study ? datasp.program_study : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Konsentrasi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ datasp.specialization_name ? datasp.specialization_name : '-'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <table *ngIf=\"dataPostGraduateSpecialization?.length == 0\" style=\"background: #fff\" class=\"table table-striped\">\n        <tbody>\n          <tr class=\"header-tab\">\n            <th class=\"th-colors\" colspan=\"3\">Program yang diminati</th>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Program Penyelenggaraan</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Program Studi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Konsentrasi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-2\">\n        <div class=\"center\" style=\"text-align: center;\">\n          <img\n            [src]=\"dataPostGraduatePersonal && dataPostGraduatePersonal.photo_url ? dataPostGraduatePersonal.photo_url : 'https://cdndata.telkomuniversity.ac.id/situ-round.png'\"\n            width=\"180px;\">\n          <br>\n          <br>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-10 table-responsive pb-1\">\n        <table class=\"table table-striped\">\n          <tbody>\n            <tr class=\"header-tab\">\n              <th class=\"th-colors\" colspan=\"3\">Data Pribadi</th>\n            </tr>\n            <tr>\n              <td class=\"width-td\">No. Peserta</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.registration_number ? dataPostGraduatePersonal.registration_number : '-'}}\n              </td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Nama Lengkap</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.fullname ? dataPostGraduatePersonal.fullname : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Kota Kelahiran</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.birth_city ? dataPostGraduatePersonal.birth_city : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Tgl/Bln/Tahun</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.birth_date | date: 'dd/MM/yyyy' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Jenis Kelamin</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.gender === 'MALE' ? 'Laki-laki' : 'Perempuan' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Email</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.email ? dataPostGraduatePersonal.email : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">No. Telp</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.house_phone_number !== 'null' ?\n                dataPostGraduatePersonal.house_phone_number : '-'\n                }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">HP</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.mobile_phone_number ? dataPostGraduatePersonal.mobile_phone_number : '-'\n                }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Alamat Rumah/Surat</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.address_detail ? dataPostGraduatePersonal.address_detail : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Kota</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.address_city ? dataPostGraduatePersonal.address_city : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Kode Pos</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduatePersonal.address_postal_code ? dataPostGraduatePersonal.address_postal_code : '-'\n                }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table *ngIf=\"dataPostGraduateWorkDataNow?.length != 0\" style=\"background: #fff\" class=\"table table-striped\">\n        <tbody *ngFor=\"let data of dataPostGraduateWorkDataNow; let i = index;\">\n          <tr class=\"header-tab\">\n            <th class=\"th-colors\" colspan=\"3\">Pekerjaan (Bagi Peserta yang mempunyai pekerjaan) {{ i + 1}}</th>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Tanggal Mulai Kerja</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ data.work_start_date ? data.work_start_date : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Nama Instansi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ data.company_name ? data.company_name : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">jabatan Terakhir</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ data.work_position ? data.work_position : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Alamat</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ data.company_address ? data.company_address : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Telp</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ data.company_phone_number ? data.company_phone_number : '-'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <table *ngIf=\"dataPostGraduateWorkDataNow?.length == 0\" style=\"background: #fff\" class=\"table table-striped\">\n        <tbody>\n          <tr class=\"header-tab\">\n            <th class=\"th-colors\" colspan=\"3\">Pekerjaan (Bagi Peserta yang mempunyai pekerjaan)</th>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Masa Kerja</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Nama Instansi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">jabatan Terakhir</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Alamat</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Telp</td>\n            <td class=\"width-td-1\">:</td>\n            <td>-</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped\">\n        <tr class=\"header-tab\">\n          <th class=\"th-colors\" colspan=\"4\">Pengalaman Kerja</th>\n        </tr>\n        <tr>\n          <td><b>Perusahaan/Instansi</b></td>\n          <td><b>Jabatan</b></td>\n          <td><b>Bidang Tugas</b></td>\n          <td><b>Masa Kerja</b></td>\n        </tr>\n        <tbody *ngIf=\"dataPostGraduateWorkDataExperience?.length != 0\">\n          <tr *ngFor=\"let data of dataPostGraduateWorkDataExperience; let i = index;\">\n            <td>{{ data.company_name ? data.company_name : '-'}}</td>\n            <td>{{ data.work_position ? data.work_position : '-'}}</td>\n            <td>{{ data.company_name ? data.company_name : '-'}}</td>\n            <td>{{ data.length_work ? data.length_work : '-'}}</td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"dataPostGraduateWorkDataExperience?.length == 0\">\n          <tr>\n            <td colspan=\"4\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"table-responsive pb-1\">\n        <table style=\"background: #fff\" class=\"table table-stripped\">\n          <tbody>\n            <tr class=\"header-tab\">\n              <th class=\"th-colors\" colspan=\"3\">Pendidikan Formal</th>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Perguruan Tinggi</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.school_name ? dataPostGraduateEducation.school_name : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Kota</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.school_city ? dataPostGraduateEducation.school_city : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Jurusan</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.education_major ? dataPostGraduateEducation.education_major : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Jenjang</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.level ? dataPostGraduateEducation.level : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">Tahun Lulus</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.graduate_year ? dataPostGraduateEducation.graduate_year : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">IPK</td>\n              <td class=\"width-td-1\">:</td>\n              <td>{{ dataPostGraduateEducation.ipk ? dataPostGraduateEducation.ipk : '-' }}</td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">File Transkip Nilai</td>\n              <td class=\"width-td-1\">:</td>\n              <td>\n                <a class=\"link-document\" [hidden]=\"dataPostGraduateEducation.url_transkrip === null\" [href]=\"dataPostGraduateEducation.url_transkrip\" target=\"_blank\">File Transkip Nilai</a>\n                <p [hidden]=\"dataPostGraduateEducation.url_transkrip !== null\">-</p>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"width-td\">File Ijazah</td>\n              <td class=\"width-td-1\">:</td>\n              <td>\n                <a class=\"link-document\" *ngIf=\"dataPostGraduateEducation.url_ijazah !== null\" [href]=\"dataPostGraduateEducation.url_ijazah\" target=\"_blank\">Berkas\n                  Ijazah </a>\n                <p *ngIf=\"dataPostGraduateEducation.url_ijazah === null\">-</p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    <!-- <div class=\"table-responsive pb-1\">\n          <table class=\"table table-stripped\">\n            <tbody>\n              <tr class=\"header-tab\">\n                <th class=\"th-colors\" colspan=\"3\">Sertifikasi Keprofesian</th>\n              </tr>\n              <tr>\n                <td>Nama Sertifikasi</td>\n                <td>Tanggal</td>\n                <td>File Sertifikasi</td>\n              </tr>\n              <tr>\n                <td>Microsoft Office Specialist</td>\n                <td>2021-02-27</td>\n                <td><a\n                    href=\"../../../porsimaba/lib/berkasmagister/484535688/Sertifikat Microsoft Office Specialist 484535688 - 211013.jpg\"\n                    target=\"blank\">Sertifikat Microsoft Office Specialist 484535688 - 211013.jpg</a></td>\n              </tr>\n            </tbody>\n          </table>\n      </div> -->\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped\">\n        <tr class=\"header-tab\">\n          <th class=\"th-colors\" colspan=\"3\">Proposal Penelitian</th>\n        </tr>\n        <tbody>\n          <tr>\n            <td class=\"width-td\">Judul Proposal</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ dataPostGraduateProposal.title ? dataPostGraduateProposal.title : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">File Proposal</td>\n            <td class=\"width-td-1\">:</td>\n            <td>\n              <a class=\"link-document\" [hidden]=\"isProposalData\" [href]=\"dataPostGraduateProposal.url\" target=\"_blank\">Berkas Proposal\n                Penelitian - {{ dataPostGraduateProposal.title }}</a>\n              <p [hidden]=\"!isProposalData\">-</p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped\">\n        <tr class=\"header-tab\">\n          <th class=\"th-colors\" colspan=\"3\">Berkas TPA</th>\n        </tr>\n        <tbody>\n          <tr>\n            <td class=\"width-td\">Skor</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ dataPostGraduateTPA.score ? dataPostGraduateTPA.score : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Tahun</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ dataPostGraduateTPA.year ? dataPostGraduateTPA.year : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">File Sertifikat</td>\n            <td class=\"width-td-1\">:</td>\n            <td>\n              <a class=\"link-document\" [hidden]=\"isTpaData\" [href]=\"dataPostGraduateTPA.url\" target=\"_blank\">Sertifikat TPA</a>\n              <p [hidden]=\"!isTpaData\">-</p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped\">\n        <tr class=\"header-tab\">\n          <th class=\"th-colors\" colspan=\"3\">Sertifikat Bahasa Inggris</th>\n        </tr>\n        <tbody>\n          <tr>\n            <td class=\"width-td\">Skor</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ dataPostGraduateToefl.score ? dataPostGraduateToefl.score : '-' }}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Tahun</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{ dataPostGraduateToefl.year ? dataPostGraduateToefl.year : '-' }}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">File Sertifikat</td>\n            <td class=\"width-td-1\">:</td>\n            <td>\n              <a class=\"link-document\" [hidden]=\"isToeflData\" [href]=\"dataPostGraduateToefl.url\" target=\"_blank\">Sertifikat Bahasa Inggris</a>\n              <p [hidden]=\"!isToeflData\">-</p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table *ngIf=\"dataPostGraduateRecommendation?.length != 0\" class=\"table table-striped\">\n        <tbody *ngFor=\"let data of dataPostGraduateRecommendation; let i = index;\">\n          <tr class=\"header-tab\">\n            <th class=\"th-colors\" colspan=\"3\">Rekomendasi {{ i+1}}</th>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Nama Pemberi Rekomendasi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.name ? data.name : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Jabatan Pemberi Rekomendasi</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.position ? data.position : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Berapa lama dan dalam kapasitas apa saudara mengenal calon mahasiswa ?\n            </td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.long_capacity_knowing_student ? data.long_capacity_knowing_student : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Pengetahuan Dalam Bidang Studi yang diminati\n            </td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.knowledge ? data.knowledge : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kemampuan intelektual</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.intellectual ? data.intellectual : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kemampuan mengekspresikan diri secara lisan</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.verbal_expression ? data.verbal_expression : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kemampuan mengekspresikan diri secara tertulis</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.written_expression ? data.written_expression : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kemampuan bekerja secara mandiri</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.work_independently ? data.work_independently : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kemampuan bekerjasama</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.work_cooperate ? data.work_cooperate : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Kedewasaan (maturity)</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.maturity ? data.maturity : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Berikan opini dan keterangan tambahan mengenai kekuatan dan kelemahan Calon Mahasiswa\n              pada\n              kolom berikut (sangat disarankan)</td>\n            <td class=\"width-td-1\">:</td>\n            <td>{{data.opinion ? data.opinion : '-'}}</td>\n          </tr>\n          <tr>\n            <td class=\"width-td\">Hasil Rekomendasi</td>\n            <td class=\"width-td-1\">:</td>\n            <td><b>{{data.recomendation ? data.recomendation : '-'}}</b></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- <div class=\"table-responsive pb-1\">\n        <table class=\"table table-stripped\">\n          <tbody>\n            <tr class=\"header-tab\">\n              <th colspan=\"2\">Penelitian</th>\n            </tr>\n            <tr>\n              <td>Judul Penelitian</td>\n              <td>Analisis Gaya Kepemimpinan Pengurus Dala</td>\n            </tr>\n            <tr>\n              <td>Bidang Ilmu</td>\n              <td>Manajemen Sumber Daya Manusia</td>\n            </tr>\n            <tr>\n              <td>Sumberdana</td>\n              <td>Pribadi</td>\n            </tr>\n            <tr>\n              <td>Jabatan di Penelitian</td>\n              <td>Ketua</td>\n            </tr>\n            <tr>\n              <td>Waktu Penelitian</td>\n              <td>6 Bulan</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"table-responsive pb-1\">\n        <table class=\"table table-stripped\">\n          <tbody>\n            <tr class=\"header-tab\">\n              <th colspan=\"3\">Publikasi</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"table-responsive pb-1\">\n        <table class=\"table table-stripped\">\n          <tbody>\n            <tr class=\"header-tab\">\n              <th colspan=\"2\">Rencana Thesis</th>\n            </tr>\n            <tr>\n              <td>Judul TA</td>\n              <td>Analisis Gaya Kepemimpinan Pengurus Dalam Upaya Meningkatkan Kinerja Karyawan Koperasi Serba Usaha\n                Tandangsari</td>\n            </tr>\n            <tr>\n              <td>Penjelasan TA</td>\n              <td>Penelitian dilakukan di KSU Tandangsari dengan responden 74 karyawan dan 3 orang pengurus. Hasil\n                penelitian ini menunjukkan bahwa gaya kepemimpinan pengurus adalah kepemimpinan partisipatif. Karyawan\n                menilai gaya kepemimpinan pengurus “cukup baik” sedangkan kinerja karyawan dinilai oleh pengurus “kurang\n                baik” artinya kedua variabel masih harus sama-sama dioptimalkan untuk menjadi lebih baik. </td>\n            </tr>\n            <tr>\n              <td>Judul Thesis</td>\n              <td>Pengaruh Customer Relationship Management dan Brand Positioning Terhadap Loyalitas Pelanggan Indihom\n              </td>\n            </tr>\n            <tr>\n              <td>Penjelasan Thesis</td>\n              <td>Semua jenis perusahaan dari berbagai sektor industri bertujuan untuk menghasilkan profit yang tinggi.\n                Profit tersebut tentunya dihasilkan dari aktivitas ekonomi yang dilakukan oleh perusahaan dengan\n                konsumen/pelanggan. Berbagai jenis perusahaan bersaing dan berlomba-loba untuk mengeluarkan penawaran\n                terbaik dan menarik agar dapat mendapatkan minat pelanggan. Adanya berbagai macam persaingan membuat\n                perusahaan harus memiliki loyalitas pelanggan yang tinggi. Mempertahankan pelanggan yang sudah ada lebih\n                baik daripada mencari pelanggan baru. Loyalitas pelanggan adalah suatu bentuk kesetiaan pelanggan\n                terhadap\n                suatu brand baik itu produk maupun jasa. Loyalitas berasal dari kepuasan yang dirasakan oleh pelanggan\n                tersebut, sehingga pelanggan akan melakukan pembelian secara terus-menerus dalam jangka panjang bahkan\n                merekomendasikan produk tersebut kepada orang lain. Loyalitas pelanggan dapat dikatakan sebagai jantung\n                sekaligus kekuatan bagi perusahaan untuk terus melangsungkan kegiatan usaha. Oleh karena itu perusahaan\n                harus memperhatikan hal tersebut agar tujuan perusahaan dapat tercapai.\n                Di era digital ini, internet merupakan salah satu kebutuhan utama masyarakat untuk melakukan berbagai\n                macam aktivitas. Kebutuhan internet yang semakin tinggi membuat berbagai perusahaan penyedia jasa\n                layanan\n                internet bersaing dan berusaha untuk mengeluarkan penawaran terbaik dari sisi harga maupun kualitas\n                untuk\n                memenuhi kebutuhan pelanggan. Begitupun dengan Indihome yang dimiliki PT. Telekomunikasi Indonesia.\n                Indihome sampai saat ini dipandang sebagai market leader. Namun seiring berjalannya waktu pesaing juga\n                semakin banyak bermunculan menawarkan layanan internet yang memiliki kecepatan dan harga yang lebih\n                baik.\n                Tetapi kualitas internet yang baik belum tentu membuat pelanggan akan bertahan dan loyal. Perusahaan\n                harus\n                memberikan nilai tambah kepada pelanggan seperti dengan cara menciptakan hubungan yang baik serta\n                mempengaruhi pemikiran pelanggan agar mereka percaya, berkomitmen serta membuat sebuah produk berada di\n                benak pelanggan dan memiliki arti yang penting agar terjadi kelangsungan usaha secara kontinu.\n                Hal tersebut dapat dilakukan dengan menerapkan Customer Relationship Management (CRM) dan juga melakukan\n                Brand Positioning yang baik kepada masyarakat. Customer Relationship Management merupakan strategi atau\n                usaha-usaha yang dilakukan perusahaan untuk mendapatkan pelanggan baru maupun mempertahankan yang sudah\n                ada agar pelanggan tersebut menjadi loyal. Dengan adanya CRM, maka akan terjalin hubungan antara\n                perusahaan dan pelanggan. Sehingga perusahaan dapat mendapatkan informasi yang berkaitan dengan\n                kebutuhan\n                maupun keluhan yang dirasakan oleh pelanggan. Terpenuhinya kebutuhan dan juga terselesaikannya\n                permasalahan yang dikeluhkan akan menjadikan pelanggan puas dan loyal sehingga tidak akan pindah ke\n                pesaing.\n                Selain dengan CRM, pelanggan juga akan loyal jika perusahaan memiliki brand positioning yang baik di\n                kalangan masyarakat. Brand Positioning adalah strategi yang dilakukan oleh perusahaan untuk memosisikan\n                brand di benak pelanggan agar pelanggan dapat langsung mengenali dan membedakan dengan brand dari\n                pesaing.\n                Brand positioning bertujuan untuk mendapatkan loyalitas pelanggan karena di benak pelanggan posisi\n                sebuah\n                brand sudah jelas, memiliki arti, unggul, terjamin dan mudah dikenali sehingga mereka enggan untuk\n                menggunakan brand yang lain.\n                Menurut Arie Indra (2013:140) menyatakan bahwa positioning dapat secara langsung berpengaruh terhadap\n                kepuasan pelanggan. Loyalitas pelanggan dapat terjadi apabila pelanggan tersebut merasa puas karena\n                harapannya telah terpenuhi.\n                Menurut Thasya Safira (2020:67) menyatakan bahwa salah satu strategi yang mampu menjembatani antara\n                pelanggan dan perusahaan adalah menerapkan suatu konsep yang disebut dengan Customer Relationshop\n                Management yang mengintegrasikan antara people, process dan technology sehingga tercipta suatu\n                komunikasi\n                yang baik dengan pelanggan terutama guna menumbuhkan loyalitas pelanggan kepada perusahaan.\n                Dari pernyataan diatas, maka dapat disimpulkan bahwa customer relationship management dan brand\n                positioning memiliki keterkaitan dengan loyalitas pelanggan. Untuk itu saya tertarik untuk melakukan\n                penelitian dengan topik “Pengaruh Customer Relationship Management dan Brand Positioning Terhadap\n                Loyalitas Pelanggan Indhome”. Penelitian ini bertujuan untuk mengetahui secara lebih mendalam mengenai:\n                (1) Bagaimana customer relationship management Indihome; (2) Bagaimana brand positioning Indihome; (3)\n                Bagaimana loyalitas pelanggan Indihome; (4) Bagaimana pengaruh customer relationship management dan\n                brand\n                positioning terhadap loyalitas pelanggan Indhome. </td>\n            </tr>\n          </tbody>\n        </table>\n      </div> -->\n\n    <br>\n    <br>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/theme/postgraduate-participant/postgraduate-participant-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/postgraduate-participant/postgraduate-participant-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PostgraduateParticipantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgraduateParticipantRoutingModule", function() { return PostgraduateParticipantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _postgraduate_participant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postgraduate-participant.component */ "./src/app/theme/postgraduate-participant/postgraduate-participant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _postgraduate_participant_component__WEBPACK_IMPORTED_MODULE_2__["PostgraduateParticipantComponent"]
    }
];
let PostgraduateParticipantRoutingModule = class PostgraduateParticipantRoutingModule {
};
PostgraduateParticipantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PostgraduateParticipantRoutingModule);



/***/ }),

/***/ "./src/app/theme/postgraduate-participant/postgraduate-participant.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/postgraduate-participant/postgraduate-participant.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, tr, td {\n  border: none;\n}\n\n.bg-color {\n  background-color: white;\n}\n\n.text-size {\n  font-size: 14pt;\n}\n\ninput[type=text] {\n  box-sizing: border-box;\n  padding: 5px 5px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 5px 5px;\n  border-radius: 4px;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 50px;\n  padding: 5px 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n  color: grey;\n  resize: none;\n}\n\n.required {\n  color: red;\n}\n\n.header-tab {\n  background: #333;\n  color: #fff;\n}\n\ntd {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.table-width {\n  width: 100%;\n}\n\n.width-td {\n  width: 30%;\n}\n\n.width-td-1 {\n  width: 3%;\n}\n\n.th-colors {\n  background-color: black;\n}\n\n.link-document {\n  color: #3776d6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL3Bvc3RncmFkdWF0ZS1wYXJ0aWNpcGFudC9wb3N0Z3JhZHVhdGUtcGFydGljaXBhbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL3Bvc3RncmFkdWF0ZS1wYXJ0aWNpcGFudC9wb3N0Z3JhZHVhdGUtcGFydGljaXBhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQUM7RUFDQyx1QkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLFVBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNVRjs7QURSQTtFQUNFLFdBQUE7QUNXRjs7QURUQTtFQUNFLFVBQUE7QUNZRjs7QURWQTtFQUNFLFNBQUE7QUNhRjs7QURYQTtFQUNFLHVCQUFBO0FDY0Y7O0FEWkE7RUFDRSxjQUFBO0FDZUYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9wb3N0Z3JhZHVhdGUtcGFydGljaXBhbnQvcG9zdGdyYWR1YXRlLXBhcnRpY2lwYW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRyLCB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn0uYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50ZXh0LXNpemUge1xuICBmb250LXNpemU6IDE0cHQ7XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjpncmV5O1xuICByZXNpemU6IG5vbmU7XG59XG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuLmhlYWRlci10YWIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbn1cbnRke1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxudGh7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4udGFibGUtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndpZHRoLXRke1xuICB3aWR0aDozMCU7XG59XG4ud2lkdGgtdGQtMXtcbiAgd2lkdGg6MyU7XG59XG4udGgtY29sb3Jze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5saW5rLWRvY3VtZW50e1xuICBjb2xvcjogcmdiKDU1LCAxMTgsIDIxNCk7XG59XG4iLCJ0YWJsZSwgdHIsIHRkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmV5O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5oZWFkZXItdGFiIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnRoIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi50YWJsZS13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2lkdGgtdGQge1xuICB3aWR0aDogMzAlO1xufVxuXG4ud2lkdGgtdGQtMSB7XG4gIHdpZHRoOiAzJTtcbn1cblxuLnRoLWNvbG9ycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1kb2N1bWVudCB7XG4gIGNvbG9yOiAjMzc3NmQ2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/postgraduate-participant/postgraduate-participant.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/postgraduate-participant/postgraduate-participant.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PostgraduateParticipantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgraduateParticipantComponent", function() { return PostgraduateParticipantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









let PostgraduateParticipantComponent = class PostgraduateParticipantComponent {
    constructor(translateService, broadcasterService, chartService, userService, fb, route) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.fb = fb;
        this.route = route;
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.route.queryParams.subscribe(params => {
            this.participant_id = params['id'];
            this.registration_number = params['registration_number'];
        });
        this.loading = false;
        this.dataPostGraduatePersonal = [];
        this.dataPostGraduateToefl = [];
        this.dataPostGraduateTPA = [];
        this.dataPostGraduateProposal = [];
        this.dataPostGraduateEducation = [];
        this.isTpaData = false;
        this.isToeflData = false;
        this.isProposalData = false;
        this.isEducationData = false;
    }
    ngOnInit() {
        this.loadPostgraduate();
    }
    loadPostgraduate() {
        this.loading = true;
        this.userService.getPostGraduate(`?registration_number=${this.registration_number}&id=${this.participant_id}`).subscribe(response => {
            if (response.length !== 0) {
                this.loading = false;
                this.dataPostGraduatePersonal = response.personal_data;
                this.dataPostGraduateWorkData = response.work_data;
                this.dataPostGraduateRecommendation = response.recomendation_data;
                this.dataPostGraduateSpecialization = response.specialization_data;
                this.dataPostGraduateWorkDataNow = [];
                this.dataPostGraduateWorkDataExperience = [];
                const workdata = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.dataPostGraduateWorkData, function (data) { return data.work_end_date === null; });
                const workdataex = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.dataPostGraduateWorkData, function (data) { return data.work_end_date !== null; });
                // search data pekerjaan sekarang
                if (workdata !== undefined) {
                    this.dataPostGraduateWorkDataNow = workdata;
                }
                else {
                    this.dataPostGraduateWorkDataNow = [];
                }
                // search pengalaman pekerjaan
                if (workdataex !== undefined) {
                    this.dataPostGraduateWorkDataExperience = workdataex;
                }
                else {
                    this.dataPostGraduateWorkDataExperience = [];
                }
                if (response.tpa_data !== null) {
                    this.dataPostGraduateTPA = response.tpa_data;
                    this.isTpaData = false;
                }
                else {
                    this.dataPostGraduateTPA = [];
                    this.isTpaData = true;
                }
                if (response.toefl_data !== null) {
                    this.dataPostGraduateToefl = response.toefl_data;
                    this.isToeflData = false;
                }
                else {
                    this.dataPostGraduateToefl = [];
                    this.isToeflData = true;
                }
                if (response.proposal_data !== null) {
                    this.isProposalData = false;
                    this.dataPostGraduateProposal = response.proposal_data;
                }
                else {
                    this.isProposalData = true;
                    this.dataPostGraduateProposal = [];
                }
                if (response.education_data !== null) {
                    this.dataPostGraduateEducation = response.education_data;
                    if (response.education_data.url !== null) {
                        this.isEducationData = false;
                    }
                    else {
                        this.isEducationData = true;
                    }
                }
                else {
                    this.isEducationData = true;
                    this.dataPostGraduateEducation = [];
                }
            }
            else {
                this.loading = false;
            }
        });
    }
};
PostgraduateParticipantComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
PostgraduateParticipantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-recommendation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postgraduate-participant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/postgraduate-participant/postgraduate-participant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postgraduate-participant.component.scss */ "./src/app/theme/postgraduate-participant/postgraduate-participant.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], PostgraduateParticipantComponent);



/***/ }),

/***/ "./src/app/theme/postgraduate-participant/postgraduate-participant.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/postgraduate-participant/postgraduate-participant.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PostgraduateParticipantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgraduateParticipantModule", function() { return PostgraduateParticipantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _postgraduate_participant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postgraduate-participant.component */ "./src/app/theme/postgraduate-participant/postgraduate-participant.component.ts");
/* harmony import */ var _postgraduate_participant_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postgraduate-participant-routing.module */ "./src/app/theme/postgraduate-participant/postgraduate-participant-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");











let PostgraduateParticipantModule = class PostgraduateParticipantModule {
};
PostgraduateParticipantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_postgraduate_participant_component__WEBPACK_IMPORTED_MODULE_3__["PostgraduateParticipantComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _postgraduate_participant_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostgraduateParticipantRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"]
        ]
    })
], PostgraduateParticipantModule);



/***/ })

}]);
//# sourceMappingURL=theme-postgraduate-participant-postgraduate-participant-module-es2015.js.map